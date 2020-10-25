


	const puppeteer = require('puppeteer');

	const userAgent= require('user-agents');


	 async function testFridge()
       {
             console.log('Запуск браузера');
             const browser = await puppeteer.launch({headless: false, slowMo: 100});
    
    console.log('1: Создание новой вкладки в браузере');
    const page= await browser.newPage();
     page.waitForTimeout(8000);
    
        console.log('2: Переход на страницу ya.ru');
        await page. goto ('https://ya.ru/');
    
        console.log(' 3: Ввод текста : Холодильник');
        const searchField= await page.$ ('#text');
        await searchField.type(' холодильник');
    
    console.log('4 : Клик в кнопку "Найти"');
    const searchButton = await page.$ ('button.button[type=submit]'); 
    await searchButton.click ();  

    console.log(' 5: Ожидание перехода в страницу поисковых результатов');
    await page.waitForNavigation (); 

    console.log('6: Получение элементов результата поиска');
    result =await page.$('.serp-item');
    

    console.log('7 :scroll down');
    const Link= await page.$ ('#search-result > li:nth-child(6)');
    await Link. click();

    console.log('8: open link');

    await page.goto('https://market.yandex.ru/catalog--kholodilniki/71639/list?hid=15450081&onstock=1&lr=21630&local-offers-first=0');

 
   
     console.log(' 9: price from');
     await page.waitForSelector('  #glpricefrom ');
     const InputPrice= await page.$('#glpricefrom');
     await InputPrice.type ('60000');

         console.log('10: price to');
     await page.waitForSelector(' #glpriceto ');
     const InputPriceS= await page.$('#glpriceto');
     await InputPriceS.type ('90000');


     console.log(' 11: Secondresult');
     
     await page.waitForSelector(' #search-prepack > div > div:nth-child(3)');

       console.log('wait for: ЖДЕМ!');
       const text = await page.$eval('#search-prepack > div > div:nth-child(3)' , element =>element.textContent); 
      
     
       await page.screenshot({path: 'testFrifge.png'});

       console.log('Сравнение ОР и ФР');
       if (result==null) {
       console.log('Результаты поиска не найдены' );
       }  else {  
       console.log(' Результаты поиска отобразились'); 
       }
       console.log('Закрытие браузера');
       await browser.close();
     }

                                testFridge();
    
   
  
