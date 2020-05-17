<?php

include_once 'vendor/autoload.php';

use GeoIp2\Database\Reader;
use GeoIp2\Exception\AddressNotFoundException;

function countries_select() {
    global $countries_srz;

    $ip = get_ip_address();
    $html = '';
    $countries = unserialize($countries_srz);

    try {
        $geoip_reader = new Reader("country.mmdb");
        $geoip_record = $geoip_reader->country($ip);

        $country = $geoip_record->country->isoCode;

    } catch (\MaxMind\Db\Reader\InvalidDatabaseException $e) {
        $country = 'RU';
    } catch (AddressNotFoundException $e) {
        $country = 'RU';
    } catch(InvalidArgumentException $e) {
        $country = 'RU';
    }

    foreach($countries as $country_lt) {
        $selected = $country == $country_lt['country'] ? ' selected' : '';

        $html .= "<option{$selected} value=\"{$country_lt['aim_n']}\">{$country_lt['name']}</option>";
    }

    return $html;
}

function get_ip_address() {
    return preg_replace("|[^0-9.]|", "", get_ip());
}

function get_ip() {
    if (!empty($_SERVER['HTTP_X_PARKING']) && validate_ip($_SERVER['HTTP_X_PARKING'])) {
        return $_SERVER['HTTP_X_PARKING'];
    }

    // check for shared internet/ISP IP
    if (!empty($_SERVER['HTTP_CLIENT_IP']) && validate_ip($_SERVER['HTTP_CLIENT_IP'])) {
        return $_SERVER['HTTP_CLIENT_IP'];
    }

    // check for IPs passing through proxies
    if (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        // check if multiple ips exist in var
        if (strpos($_SERVER['HTTP_X_FORWARDED_FOR'], ',') !== false) {
            $iplist = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']);
            foreach ($iplist as $ip) {
                $ip = trim($ip);
                if (validate_ip($ip))
                    return $ip;
            }
        } else {
            if (validate_ip($_SERVER['HTTP_X_FORWARDED_FOR']))
                return $_SERVER['HTTP_X_FORWARDED_FOR'];
        }
    }
    if (!empty($_SERVER['HTTP_X_FORWARDED']) && validate_ip($_SERVER['HTTP_X_FORWARDED']))
        return $_SERVER['HTTP_X_FORWARDED'];
    if (!empty($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']) && validate_ip($_SERVER['HTTP_X_CLUSTER_CLIENT_IP']))
        return $_SERVER['HTTP_X_CLUSTER_CLIENT_IP'];
    if (!empty($_SERVER['HTTP_FORWARDED_FOR']) && validate_ip($_SERVER['HTTP_FORWARDED_FOR']))
        return $_SERVER['HTTP_FORWARDED_FOR'];
    if (!empty($_SERVER['HTTP_FORWARDED']) && validate_ip($_SERVER['HTTP_FORWARDED']))
        return $_SERVER['HTTP_FORWARDED'];

    // return unreliable ip since all else failed
    return $_SERVER['REMOTE_ADDR'];
}

/**
 * Ensures an ip address is both a valid IP and does not fall within
 * a private network range.
 */
function validate_ip($ip) {
    if (strtolower($ip) === 'unknown')
        return false;

    // generate ipv4 network address
    $ip = ip2long($ip);

    // if the ip is set and not equivalent to 255.255.255.255
    if ($ip !== false && $ip !== -1) {
        // make sure to get unsigned long representation of ip
        // due to discrepancies between 32 and 64 bit OSes and
        // signed numbers (ints default to signed in PHP)
        $ip = sprintf('%u', $ip);
        // do private network range checking
        if ($ip >= 0 && $ip <= 50331647) return false;
        if ($ip >= 167772160 && $ip <= 184549375) return false;
        if ($ip >= 2130706432 && $ip <= 2147483647) return false;
        if ($ip >= 2851995648 && $ip <= 2852061183) return false;
        if ($ip >= 2886729728 && $ip <= 2887778303) return false;
        if ($ip >= 3221225984 && $ip <= 3221226239) return false;
        if ($ip >= 3232235520 && $ip <= 3232301055) return false;
        if ($ip >= 4294967040) return false;
    }
    return true;
}
$countries_srz = 'a:2:{i:0;a:3:{s:5:"aim_n";i:1;s:7:"country";s:2:"RU";s:4:"name";s:12:"Россия";}i:1;a:3:{s:5:"aim_n";i:2;s:7:"country";s:2:"KZ";s:4:"name";s:18:"Казахстан";}}';
?>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <title>Immortal Shoes</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap&subset=cyrillic" rel="stylesheet">
    <link href="js/lib/css/tiny-slider.css" rel="stylesheet">
    <link rel="stylesheet" href="css/index.css">

<script type="text/javascript" src="//promo-2018.ru/static/js/jquery.min.js"></script>
<script type="text/javascript" src="//promo-2018.ru/static/js/lt_landing_script.js"></script>
<script type="text/javascript" src="//promo-2018.ru/static/js/lt_landing_valid_form.js"></script>
<script type="text/javascript">
    $jsonData = {"1":{"currency":" \u0440\u0443\u0431.","productsum":"3290.00","oldproductsum":"6580.00","delivery":0,"totalsum":"3290.00"},"2":{"currency":" \u0442\u0435\u043d\u0433\u0435","productsum":"21990.00","oldproductsum":"43980.00","delivery":0,"totalsum":"21990.00"}}
</script>

<!-- LT code insertion -->

<!-- /LT code insertion -->

</head>

<body>
    <div class="b1">
        <div class="container">
            <h1 class="mb25 h1-title">Неубиваемые кроссовки </h1><img class="mb20" src="img/logo.png">
            <div class="b f2 dec-color mb15">Суперпрочная обувь на каждый день</div>
            <ul class="galka-list mb20">
                <li>Сверхпрочные</li>
                <li>Водонепроницаемые</li>
                <li>Для снега, дождя и жары</li>
                <li>Гарантия: 5 лет как новые</li>
            </ul>
            <div class="b1-img-container mb20"><img class="b1-img-container__img w100p" src="img/Jar3.png"><img class="b1-img-container__label" src="img/Group_27.png"></div>
            <video class="youtube" width="100%" height="100%" controls><source src="video/1.mp4" type="video/mp4">Your browser does not support the video tag. </video>
			<ul class="galka-list mb35">
                <li>Сделаны из вентилируемой водоотталкивающей мембраны РТХ </li>
                <li>Подходят и для занятий спортом, и для ежедневной работы</li>
                <li>Не деформируется</li>
            </ul>
            <h2 class="f5 dec-color ttu b mb120">Закажите сейчас по акции</h2>
            <div class="mb65">
                <div class="form-container grad mb20" id="form1">
                    <div class="prices mb25 ts">
                        <div class="prices__old oldproductsum"></div>
                        <div class="prices__new productsum"></div>
                        <!--<div class="prices__label">* при покупке комплекта</div>-->
                    </div>
                    <form class="lt-form mb30 orderformcdn" method="post" action="/success/">
                        <div class="mb30">
                            <select class="input countryselect" name="aim"><?= countries_select(); ?></select>
                            <input class="input field" placeholder="Ваше Имя" name="name" value="">
                            <input class="input field" placeholder="Ваш телефон" name="phone" value="">
                        </div>
                        <div class="reolader"><button class="btn btn_form mm_button" >Заказать сейчас</button>
                            <div class="ajax_loader_block"><img class="ajax_loader" src="img/ajax-loader.gif" alt="Идет отправка данных"> <span class="ajax_loader">Идет отправка данных</span></div>
                        </div>
                        <input type="hidden" name="productsum" value="1147 руб."><input type="hidden" name="delivery" value="0 руб."><input type="hidden" name="totalsum" value="1147 руб."><input type="hidden" name="user" value="1"><input type="hidden" name="address" value="Уточнить у покупателя">
                    </form>
                    <div class="counter">
                        <div class="counter__title">До конца акции осталось</div>
                        <div class="counter__container">
                            <div class="counter__cell">
                                <div class="counter__tablo counter__d">00</div>
                                <div class="counter__label">дней</div>
                            </div>
                            <div class="counter__cell">
                                <div class="counter__tablo counter__h">12</div>
                                <div class="counter__label">часов</div>
                            </div>
                            <div class="counter__cell">
                                <div class="counter__tablo counter__m">46</div>
                                <div class="counter__label">минут</div>
                            </div>
                            <div class="counter__cell">
                                <div class="counter__tablo counter__s">53</div>
                                <div class="counter__label">секунд</div>
                            </div>
                        </div>
                    </div>
                </div><a class="politika" href="politika.html">Политика конфиденциальности</a>
            </div>
            <h2 class="title mb25 black-color">Устали менять кроссовки каждый год?</h2>
            <ul class="voskl-list mb30">
                <li>Надоело платить за "одноразовые" кроссовки?</li>
                <li>Вроде только купили, а кроссовки уже "убитые"? </li>
                <li>Новая пара = новые мозоли?</li>
                <li>90% обуви не служат даже 3х лет</li>
                <li>Зимой мерзнете, а летом потеют ноги?</li>
                <li>Защищают ли обычные кроссовки от гвоздей?</li>
            </ul>
            <div class="full-width-img b1-two-img mb10"><img src="img/l1.png"><img src="img/r1.png"></div><br>
            <div class="full-width-label mb50">
                <div>новые</div>
                <div>через пол года</div>
            </div>
            <h1 class="mb20 h1-title">Неубиваемые кроссовки</h1>
            <div class="first-slider mb30">
                <div class="slider-tovar"><img class="w100p slider-tovar_1" src="img/s-l3004.jpg"><img class="w100p slider-tovar_1" src="img/65c8ed7ab677cb8e30fb085f5ad18a32.png">
                    <!-- img.w100p.slider-tovar_2(src='img/s-l3002.jpg')--><img class="w100p slider-tovar_3" src="img/s-l3001.jpg">
                </div>
            </div>
        </div>
    </div>
    <div class="b2">
        <div class="container">
            <p class="f2 b dec-color mb30">Навсегда забудьте о грязной, неухоженной и порванной обуви. Следующие 5 лет пройдут в комфорте и удобстве!</p>
        </div>
    </div>
    <div class="b2-img">
        <div class="container">
            <div class="f4 b light-color">
                <p>Кроссовкам <br>IMMORTAL SHOES <br>не страшен даже удар <br>молотком!</p>
            </div>
        </div>
    </div>
    <div class="b2-later">
        <div class="container">
            <ul class="galka-list mb20">
                <li>Противоскользящая подошва</li>
                <li>Водонепроницаемость</li>
                <li>Стелька с антибактериальной пропиткой</li>
                <li>Стабилизированная пяточная зона</li>
            </ul><a class="btn" href="#form2">ЗАКАЗАТЬ СЕЙЧАС</a>
        </div>
    </div>
    <div class="b3 metal">
        <div class="container">
            <ul class="container-list">
                <li>ИДЕАЛЬНОЕ СЦЕПЛЕНИЕ С ЛЮБОЙ ПОВЕРХНОСТЬЮ</li>
                <li>ВЕС ВСЕГО 448 ГРАММ</li>
                <li>ПОГЛОЩЕНИЕ УДАРОВ, УМЕНЬШАЕТ НАГРУЗКУ НА НОГИ</li>
                <li>ЗАЩИТА НОГ ОТ ТРАВМ БЛАГОДАРЯ ТИТАНОВОЙ ВСТАВКЕ НА НОСКЕ </li>
                <li>СВЕРХПРОЧНАЯ ПОДОШВА ЗАЩИТИТ ОТ ПРОКОЛОВ ГВОЗДЯМИ И ДРУГИМИ ОСТРЫМИ ПРЕДМЕТАМИ</li>
            </ul>
        </div>
    </div>
    <div class="b4" style="overflow: hidden;">
        <div class="container"><img class="full-width-img mb30" src="img/b3-3.png">
            <h1 class="h1-title mb20">Инновационная технология производства</h1>
            <p class="b4-color mb30">Кроссовки сделаны из высокотехнологичной мембраны РТХ 10 000. Подошва Impact Control - амортизирующая прослойка в мидсоли, выполнена из наслоения двух EVA-слоев,что позволяет распределять нагрузку на стопу. Технология EVA позволяет вашим ногам дышать, при этом не пропуская влагу.</p>
            <video class="youtube" width="100%" height="100%" controls><source src="video/2.mp4" type="video/mp4">Your browser does not support the video tag. </video>
			<ul class="galka-list mb20">
                <li>Функциональная стелька OrtoLite с антимикробным покрытием</li>
                <li>Технология поддержки стопы Forgedmesh</li>
                <li>Подметка из резины Contine для оптимального сцепления при любых погодных условиях</li>
            </ul><img class="full-width-img b4-img" src="img/Layer_164.png" style="top: 4px;">
        </div>
    </div>
    <div class="b5 grad">
        <div class="container">
            <h1 class="h1-title light-color mb20 ts">Цифры говорят сами за себя:</h1>
            <ul class="galka-list galka-list_white light-color mb20">
                <li>На 62% меньше устают ноги</li>
                <li>Амортизация подошвы в 2 раза выше</li>
                <li>На 85% меньше риск получить травму</li>
            </ul><img src="img/medals.png"><a class="btn btn_form btn_green" href="#form2">Заказать сейчас</a>
        </div>
    </div>
    <div class="b6">
        <div class="container">
            <p class="b6-color mb40">*согласно исследованию компании "SportFit", сравнившей модели кроссовок известных брендов</p>
            <h2 class="title dec-color mb30">Чем отличаются кроссовки IMMORTAL SHOES от обычной обуви. </h2>
            <h2 class="title dec-color-2 mb20">Стандартные кроссовки:</h2>
            <ul class="neg-list mb20">
                <li>Протирается подошва, расходятся швы</li>
                <li>Натирают стопу</li>
                <li>Ноги потеют, летом невозможно ходить</li>
                <li>Нет фиксации стопы - постоянный риск растяжений и вывихов</li>
            </ul>
            <div class="grad grad-container mb25"><img class="mb20 w100p" src="img/Jar3.png">
                <ul class="galka-list galka-list_white light-color f4">
                    <li>Носятся более 5 лет</li>
                    <li>Укрепляют здоровье коленных суставов</li>
                    <li>Универсальный дизайн: для мужчин и женщин</li>
                    <li>Подходят и для занятий спортом, и для ежедневного досуга</li>
                    <li>Два цвета на выбор: зеленый и серый</li>
                    <li>Подходят для любого времени года</li>
                    <li>Удовольствие от ходьбы и бега каждый день</li>
                </ul>
            </div>
            <p class="ttu m dec-color-2 mb110">ВНИМАНИЕ! ОСТЕРЕГАЙТЕСЬ ПОДДЕЛОК! НАСТОЯЩИЕ КРОССОВКИ IMMORTAL SHOES ВЫ МОЖЕТЕ ЗАКАЗАТЬ ТОЛЬКО НАПРЯМУЮ У НАС НА САЙТЕ!</p>
            <div class="mb40">
                <div class="form-container grad mb20" id="form2">
                    <div class="prices mb25 ts">
                        <div class="prices__old oldproductsum"></div>
                        <div class="prices__new productsum"></div>
                        <!--<div class="prices__label">* при покупке комплекта</div>-->
                    </div>
                    <!--<div class="prices__label mb40 ts">В связи с высоким спросом не более 3 пар в 1 руки</div>-->
                    <h2 class="form-container__title mb20 ts">ОФОРМИТЕ ЗАКАЗ СЕЙЧАС!</h2>
                    <form class="lt-form mb30 orderformcdn" method="post" action="/success/">
                        <div class="mb30">
                            <select class="input countryselect" name="aim"><?= countries_select(); ?></select>
                            <input class="input field" placeholder="Ваше Имя" name="name" value="">
                            <input class="input field" placeholder="Ваш телефон" name="phone" value="">
                        </div>
                        <div class="reolader"><button class="btn btn_form mm_button" >Заказать сейчас</button>
                            <div class="ajax_loader_block"><img class="ajax_loader" src="img/ajax-loader.gif" alt="Идет отправка данных"> <span class="ajax_loader">Идет отправка данных</span></div>
                        </div>
                        <input type="hidden" name="productsum" value="1147 руб."><input type="hidden" name="delivery" value="0 руб."><input type="hidden" name="totalsum" value="1147 руб."><input type="hidden" name="user" value="1"><input type="hidden" name="address" value="Уточнить у покупателя">
                    </form>
                    <div class="counter">
                        <div class="counter__title">До конца акции осталось</div>
                        <div class="counter__container">
                            <div class="counter__cell">
                                <div class="counter__tablo counter__d">00</div>
                                <div class="counter__label">дней</div>
                            </div>
                            <div class="counter__cell">
                                <div class="counter__tablo counter__h">12</div>
                                <div class="counter__label">часов</div>
                            </div>
                            <div class="counter__cell">
                                <div class="counter__tablo counter__m">46</div>
                                <div class="counter__label">минут</div>
                            </div>
                            <div class="counter__cell">
                                <div class="counter__tablo counter__s">53</div>
                                <div class="counter__label">секунд</div>
                            </div>
                        </div>
                    </div>
                </div><a class="politika" href="politika.html">Политика конфиденциальности</a>
            </div>
            <h2 class="title dec-color mb15">НЕУБИВАЕМЫЕ КРОССОВКИ IMMORTAL SHOES</h2>
            <div class="f2 mb20">Много ситуаций - один выбор!</div>
            <ul class="galka-list mb40">
                <li>Уникальная разработка</li>
                <li>Технология 21 века</li>
                <li>Признание покупателей</li>
            </ul>
            <ul class="prizes-list">
                <li><img src="img/Layer_170.png">
                    <p>Сертификат прохождения тестов на износоустойчивость IWB CrushTest </p>
                </li>
            </ul>
        </div>
    </div>
    <div class="b7 grey-grad">
        <div class="container">
            <h2 class="title dec-color mb15">Удовольствие от ходьбы и бега каждый день!</h2>
            <ol class="num-list mb15">
                <li>Оставьте заявку в форме ниже</li>
                <li>Выберите цвет: зеленый или серый</li>
                <li>Выберите размер</li>
            </ol><img class="w100p" src="img/sizes.png">
        </div>
    </div>
    <div class="b8 metal">
        <div class="container">
            <h2 class="title light-color mb20">Колоссальная экономия денег!</h2>
            <div class="mb15 light-color">
                <p>По данным Росстата, средний россиянин в год тратит на покупку обуви около 10000 руб</p>
                <p>Покупая кроссовки IMMORTAL SHOES, вы экономите за первый год 6000 руб</p>
                <p>Общая сумма экономии за 5 лет: более 30 000 рублей!</p>
            </div>
        </div>
    </div>
    <div class="b9">
        <div class="container">
            <div class="mb40">
                <div class="slider">
                    <div class="slide">
                        <div class="slide__title mb30">Мнение покупателей</div><img class="slide__img mb30 circle" src="img/Layer_168.png">
                        <p class="slide__text mb15">Работаю на стройке и такая обувь для меня конечно нужна, но одно дело грубые ботинки, а другое хорошего вида кроссовки, в которых можно и домой после работы пойти. Вчера пришёл заказ, все хорошо, сегодня уже на работу в них вышел, удобные, надеюсь как и обещано долго прослужат.</p>
                        <div class="slide__name m">Денис, 27 лет</div>
                    </div>
                    <div class="slide">
                        <div class="slide__title mb30">Мнение покупателей</div><img class="slide__img mb30 circle" src="img/4.jpg">
                        <p class="slide__text mb15">Эти кроссовки прям для меня, очень крутые и в дизайне, и в носке. Недавно в них попал под дождь и пришёл домой с сухими ногами, круто. Главное, что эта стальная вставка очень хорошо защищает пальцы, проверено на себе.</p>
                        <div class="slide__name m">Максим, 45 лет</div>
                    </div>
                    <div class="slide">
                        <div class="slide__title mb30">Мнение покупателей</div><img class="slide__img mb30 circle" src="img/meyram.png">
                        <p class="slide__text mb15">Только что заказал, видел такие у друга, понравились, очень крутые кроссы. Для гор вообще самое то.</p>
                        <div class="slide__name m">Андрей, 41 год</div>
                    </div>
                </div>
            </div>
            <h2 class="title dec-color mb20">Как заказать IMMORTAL SHOES?</h2>
            <ol class="how-buy-list">
                <li>ОСТАВЬТЕ ЗАЯВКУ НА ЗАКАЗ ЧЕРЕЗ ФОРМУ НИЖЕ</li>
                <li>МЫ СВЯЖЕМСЯ С ВАМИ ДЛЯ ПОДТВЕРЖДЕНИЯ ЗАКАЗА</li>
                <li>ЧЕРЕЗ НЕСКОЛЬКО ДНЕЙ НАШ КУРЬЕР ДОСТАВИТ ВАМ ТОВАР</li>
                <li>НАСЛАЖДАЙТЕСЬ УДОБСТВОМ И КОМФОРТОМ!</li>
            </ol>
        </div>
    </div>
    <div class="b10 grey-grad">
        <div class="container">
            <h2 class="f2 b dec-color mb15">Неубиваемые кроссовки IMMORTAL SHOES</h2>
            <p class="f2 mb15">Суперпрочная обувь на каждый день</p>
            <ul class="galka-list mb15">
                <li>Гарантия 5 лет</li>
                <li>Не боятся воды, снега и грязи</li>
                <li>Удобные и функциональные</li>
            </ul>
            <div class="b1-img-container mb30"><img class="b1-img-container__img" src="img/Jar3.png"><img class="b1-img-container__label" src="img/Group_27.png"></div>
            <p class="f2 mb15">Не понравились кроссовки? <br>Не подошел размер или цвет?</p>
            <ul class="galka-list">
                <li>Гарантированно обменяем или вернем деньги!</li>
            </ul>
        </div>
    </div>
    <div class="b11 grey-grad">
        <div class="container">
            <h2 class="f4 dec-color mb120 ttu b">Закажите сейчас по акции!</h2>
            <div class="form-container grad mb20" id="form3">
                <div class="prices mb25 ts">
                    <div class="prices__old oldproductsum"></div>
                    <div class="prices__new productsum"></div>
                    <!--<div class="prices__label">* при покупке комплекта</div>-->
                </div>
                <form class="lt-form mb30 orderformcdn" method="post" action="/success/">
                    <div class="mb30">
                        <select class="input countryselect" name="aim"><?= countries_select(); ?></select>
                        <input class="input field" placeholder="Ваше Имя" name="name" value="">
                        <input class="input field" placeholder="Ваш телефон" name="phone" value="">
                    </div>
                    <div class="reolader"><button class="btn btn_form mm_button" >Заказать сейчас</button>
                        <div class="ajax_loader_block"><img class="ajax_loader" src="img/ajax-loader.gif" alt="Идет отправка данных"> <span class="ajax_loader">Идет отправка данных</span></div>
                    </div>
                    <input type="hidden" name="productsum" value="1147 руб."><input type="hidden" name="delivery" value="0 руб."><input type="hidden" name="totalsum" value="1147 руб."><input type="hidden" name="user" value="1"><input type="hidden" name="address" value="Уточнить у покупателя">
                </form>
                <div class="counter">
                    <div class="counter__title">До конца акции осталось</div>
                    <div class="counter__container">
                        <div class="counter__cell">
                            <div class="counter__tablo counter__d">00</div>
                            <div class="counter__label">дней</div>
                        </div>
                        <div class="counter__cell">
                            <div class="counter__tablo counter__h">12</div>
                            <div class="counter__label">часов</div>
                        </div>
                        <div class="counter__cell">
                            <div class="counter__tablo counter__m">46</div>
                            <div class="counter__label">минут</div>
                        </div>
                        <div class="counter__cell">
                            <div class="counter__tablo counter__s">53</div>
                            <div class="counter__label">секунд</div>
                        </div>
                    </div>
                </div>
            </div><a class="politika" href="politika.html">Политика конфиденциальности</a>
        </div>
    </div>
    <footer>
        <div class="container tac">
            <p class="tac mb15">ООО&nbsp;ВИТЛ, г.&nbsp;Москва, ул.&nbsp;Бестужевых д.14а, ИНН&nbsp;4823018240, ОГРН&nbsp;1024840833005</p>
			<img class="mb15" src="img/lt-footer.png"><br><a class="mb10" href="politika.html" target="_blank">Политика конфиденциальности</a><br>
			<a href="user.html" target="_blank">Пользовательское соглашение</a>
        </div>
    </footer>
    <script src="js/lib/tiny-slider.js"></script>
    <script src="js/index.js"> </script>


    <script type="text/javascript">
        var hash = "G6W7L";
        var lt_landing_id = 5979;
        var success_page = "success/success.php";
        var failure_page = "success/failure.php";
        
    </script>
    <script type="text/javascript" src="js/send.min.js"></script>
    </body>

</html>