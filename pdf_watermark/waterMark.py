from reportlab.pdfgen import canvas
from PyPDF2 import PdfFileWriter, PdfFileReader
from reportlab.lib.units import cm

watermarkPath = "./static/watermark.pdf"

def waterMark(waterString, inputpath, outpath):
    c = canvas.Canvas(watermarkPath)
    # c.drawString(15, 720,"ziling")
    c.translate(10*cm, 5*cm)
    #设置字体
    c.setFont("Helvetica", 80)
    #指定描边的颜色
    c.setStrokeColorRGB(0, 1, 0)
    #指定填充颜色
    c.setFillColorRGB(0, 1, 0)
    #画一个矩形
    # c.rect(cm, cm, 7*cm, 17*cm, fill=1)
    #旋转45度,坐标系被旋转
    c.rotate(45)
    #指定填充颜色
    c.setFillColorRGB(0.6, 0, 0)
    #设置透明度,1为不透明
    c.setFillAlpha(0.3)
    #画几个文本,注意坐标系旋转的影响
    c.drawString(3*cm, 0*cm, waterString)
    c.setFillAlpha(0.6)
    c.save()

    # Get the watermark file you just created
    watermark = PdfFileReader(open(watermarkPath, "rb"))

    # Get our files ready
    output_file = PdfFileWriter()
    input_file = PdfFileReader(open(inputpath, "rb"))

    # Number of pages in input document
    page_count = input_file.getNumPages()

    # Go through all the input file pages to add a watermark to them
    for page_number in range(page_count):
        print ("Watermarking page {} of {}".format(page_number, page_count))
        # merge the watermark with the page
        input_page = input_file.getPage(page_number)
        input_page.mergePage(watermark.getPage(0))
        # add page from input file to output document
        output_file.addPage(input_page)

    # finally, write "output" to document-output.pdf
    with open(outpath, "wb") as outputStream:
        output_file.write(outputStream)


def main():
    waterString = "wujingwei"
    inputpath = "./static/wujingwei_resume.pdf" 
    outpath = "./static/document-output.pdf"
    waterMark(waterString, inputpath, outpath)

if __name__ == "__main__":
    main()

