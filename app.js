const fortuneResults = {    
  money: [    
      {
          stars: '★★★',
          detail: '最高の金運です！いつの間にかお金が溜まっているかも・・・？',
      },
      {
          stars: '★★',
          detail: 'まずまず金運です！使いすぎには注意しましょう！',
      },
      {
          stars: '★',
          detail: '悪い傾向が見られます！財布の紐は絞めておくと吉です！'
      }
  ],
  work: [
    {
      stars: '★★★',
      detail: '最高の仕事運です！いつも以上にチャンスが巡ってくるかも・・・？',
    },
    {
      stars: '★★',
      detail: 'まずまず仕事運です！普段通り仕事が進むでしょう！',
    },
    {
      stars: '★',
      detail: '悪い傾向が見られます！自信過剰にならないように注意しましょう'
    }
  ],
  health: [
    {
      stars: '★★★',
      detail: '最高の健康運です！ランニングの距離を伸ばしても良いですね！',
    },
    {
      stars: '★★',
      detail: 'まずまず健康運です！無理せず体を動かしましょう！',
    },
    {
      stars: '★',
      detail: '悪い傾向が見られます！ケガにご注意を・・・'
    }
  ]
}






$(".js-fortune-start").click( function() {
  for (let i in fortuneResults) {
    const Num = Math.floor( Math.random() * 3 );

    const Stars = fortuneResults[i][Num]['stars'];
    const Detail = fortuneResults[i][Num]['detail'];
  
    const elements = '.' + i;

    $(elements).find('.stars').text(Stars);
    $(elements).find('.detail').text(Detail);
    
  }
  

  if ($('.start-button').text() === '運勢を占う！'){
    $('.start-button').text('もう一度占う！');
    $('.result').fadeIn(500);
  } else {
    $('.start-button').text('運勢を占う！');
    $('.result').hide();
  }
})

  



  // let WorkNum = Math.floor( Math.random() * 3 );

  // let WorkStars = fortuneResults['work'][WorkNum]['stars']
  // let WorkDetail = fortuneResults['work'][WorkNum]['detail']

  // $('.work .stars').text(WorkStars);
  // $('.work .detail').text(WorkDetail);


  
  // let HealthNum = Math.floor( Math.random() * 3 );

  // let HealthStars = fortuneResults['health'][HealthNum]['stars']
  // let HealthDetail = fortuneResults['health'][HealthNum]['detail']

  // $('.health .stars').text(HealthStars);
  // $('.health .detail').text(HealthDetail);




// console.log(GetResults)
