$(document).ready(function(){
	var cloth = new Cloth();
	cloth.name='美丽的小花衣裙'
    cloth.description='穿上特别好看，紧身，漂亮，棒棒的'
    /*普通价格*/
    cloth.normalPrice=399
    /*团购价格*/
    cloth.youhuijia=299
   /*cloth经购买的人数*/
    cloth.buySum=2398;
    /*轮播图片列表*/
    cloth.images=[
    	{small:'images/s11.jpg',big:'images/s11.jpg'},
        {small:'images/s12.jpg',big:'images/s12.jpg'},
        {small:'images/s13.jpg',big:'images/s13.jpg'}
        ]

    cloth.init();
});