---
sidebar_position: 3
description: Операторы, тарифы, покрытие сетей
---

# Сим-карты и интернет {#sim-internet}

![Результат тестирования](/img/mobile_network_experience_report_2022.png)

- [Отчет о доступности, покрытии и скорости работы операторов на Шри-Ланке.](https://www.opensignal.com/reports/2022/07/srilanka/mobile-network-experience)
- [Средняя скорость мобильного и кабельного интернета по Шри-Ланке](https://www.speedtest.net/performance/sri-lanka)

Во время отключения электричества, мобильная связь и интернет продолжают работать, но может сеть значительно провисать.  

## Мобильная связь и интернет {#mobile}

| Оператор    | Тарифы                                                            | USSD коды                                              |
| ----------- | ----------------------------------------------------------------- | ------------------------------------------------------ |
| Dialog      | <https://www.dialog.lk/mobile-postpaid>                           | Баланс - \*#456#, Номер - #132#, Тарифный план - #678# |
| SLT Mobitel | <https://www.mobitel.lk/broadband/plans-and-rates-postpaid#Heavy> | Баланс - \*100#, Номер - #132#, Тарифный план - #170#  |
| Hutch       | <https://hutch.lk/my-plan/>                                       | Универсиальный код - \*123#                            |
| Airtel      | <https://www.airtel.lk/postpaid-plans/>                           | Баланс - \*550#, Номер - \*11#                         |

У всех операторов можно встретить безлимитные тарифы, но по превышению трафика в день урезается скорость.  

Приобрести сим-карту вы можете прямо в аэропорту или отделениях связи, но в аэропорту оформить получится быстрее всего.

Качество интернета разница от места и времени. В среднем интернет позволяет смотреть youtube, пользоваться мессенджерами, совершать аудио- и видеозвонки, удаленно работать.

### eSIM {#esim}

На данный момент eSIM есть только у [Dialog](https://www.dialog.lk/esim) и [Mobitel](https://www.mobitel.lk/mobitel-esim).

### Пополнение баланса {#balance-replenishment}

Пополнить можно через карту пополнения (купить можно в магазинах) или онлайн через сайт или приложение оператора.

## Домашний интернет {#home-internet}

| Провайдер   | Тарифы                                                   |
| ----------- | -------------------------------------------------------- |
| Dialog      | <https://dlg.dialog.lk/home-broadband-postpaid/packages> |
| SLT Mobitel | <https://www.slt.lk/en/broadband/packages>               |

Виллы, отели и прочее жилье могут быть подключены через оптоволокно (fibre channel), что обеспечивают более быстрое и стабильное соединение в сравнение с ADSL (интернет по телефонной сети). Бывает, когда wifi работает через мобильный интернет, в этом случае интернет может заметней проседать от количество подключенных устройств или дождя. Так же учитывайте, в случае отключения электричество и отсутствия резервного питания (генератора) вы останетесь без роутера, но можно приобрести кабель для роутера, чтобы питался от powerbank. Ищите в интернет магазинах USB to DC, для большинства роутера подходит разьем DC 2.1х5.5 мм

Роутеры зачастую стоят простые, поэтому, если вам нужен роутер помощнее/функциональней, стоит взять с собой в поездку.  
Для более стабильного интернета, можно приобрести роутер, который умеет переключать интернет с кабельного на мобильный в случае недоступности сети.

### Безлимитные тарифы {#unlimited-plans}

Безлимитные тарифы имеют ряд ограничений:

- VPN
- Torrents
- Telegram
- Peer-to-Peer приложения

Для торрентов используйте прокси, VPN или клиент [Tribler](https://www.tribler.org/).  
Для telegram используйте прокси или VPN.

Самый простой вариант сменить тариф на не безлимитный.

#### VPN {#vpn}

Из того что проверили:

| Работают  | Не работают |
| --------- | ----------- |
| L2TP      | OpenVPN     |
| WireGuard | IKEv2       |