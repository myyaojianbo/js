//页面的业务逻辑
$(document).ready(function(){

    var ebook =  new eBook()
    ebook.name='JavaScript高级教程'
    ebook.description = '畅销书籍'
    ebook.normalPrice=144
    ebook.youhuijia=120
    ebook.author='大作家'
    ebook.buySum=100;
    ebook.publisher='北京大学出版社'
    ebook.pages=1001
    ebook.publishDate = '2014-08-19'
    ebook.type = 'it前端'
    ebook.images=[
        {small:'images/s11.jpg',big:'images/s11.jpg'},
        {small:'images/s12.jpg',big:'images/s12.jpg'},
        {small:'images/s13.jpg',big:'images/s13.jpg'}
    ]

    /*使用对象中的方法属性*/
  /*  book.bindDOMDetail()
    book.bindDOMImage()*/

    ebook.init()

});