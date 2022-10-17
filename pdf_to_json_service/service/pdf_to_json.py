from PIL import Image
from datetime import date
import pdf2image
import pytesseract as tess

def concat_imgs_v(imgs):
    if type(imgs) != list:
        return imgs

    if len(imgs) > 0:
        im0 = imgs[0]
        for im2 in imgs[1:]:
            new_img = Image.new("RGB", (im0.width, im0.height+im2.height))
            new_img.paste(im0, (0, 0))
            new_img.paste(im2, (0, im0.height))

            im0 = new_img

        return im0

    return imgs

def subjects_completed(lines, content_dict):
    semesters = ["2021.3"]
    for year in range(2006, date.today().year, 1):
        for semester in range(1,3, 1):
            semesters.append(str(year)+"."+str(semester))
            
    for line in lines[1:]:
        #ex.: 2021.2
        subject = dict()

        sub_ = line.split(" ")

        if sub_[0] in semesters:

            subject["semester"] = sub_[0]
            subject["subject_code"] = sub_[1]
            subject["status"] = sub_[-1]
            subject["score"] = sub_[-2]
            subject["freq"] = sub_[-3]
            subject["work_load"] = sub_[-4]

            content_dict["subjects_completed"].append(subject)

def extract_information(content):
    content_dict = dict()
    content_dict["subjects_completed"] = []

    lines = content.split("\n")
    for i in range(len(lines)):
        line = lines[i]
        if line[0:5] == "Nome": #Nome and Matricula are in the same line
            p_m = line.index("Matricula")
            content_dict["name"] = line[line.index(": ")+2:p_m-1]
            content_dict['register'] = line[p_m+11:]
        
        if line[0:19] == "Data de Nascimento:":
            content_dict["birth_date"] = line[line.index("to:")+4:line.index(" Local")]
            content_dict["birth_place"] = line[line.rindex("to:")+4:]

        if line[0:4] == "CPF:":
            content_dict["cpf"] = line[line.index("CPF:")+5:]

        if line[0:7] == "Status:":
            content_dict["score"] = line[line.index("IRA:")+5:]

        if line[0:3] == "Ano" and line[19:27] == "Inicial:":
            content_dict["init_semester"] = line[28:34]

        if line[0:6] == "Curso:":
            content_dict['course_name'] = line[line.index("Curso:")+7:]

        if "Componentes Curriculares Cursados/Cursando" in line:
            subjects_completed(lines[i:], content_dict)

    return content_dict

def pdf_to_json(pdf_file):
    images = pdf2image.convert_from_bytes(pdf_file.read(), fmt="jpeg")
    result_img = concat_imgs_v(images)

    content = tess.image_to_string(result_img)  # type: ignore

    return extract_information(content)
