import React, {useEffect, useState} from "react";
import {getData} from "../api";
import {Button, Space} from "antd";
import { createBrowserHistory } from "history";
import { List } from 'antd';

const history = createBrowserHistory();

const InfoLibrary = ({id}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getData().then(items => setData(items.find(data => {
            return data.order === id
        })));
    }, [id]);
    
    if (!data) return null

    return <div style={{display: "flex", flexDirection: "column", width: "50%", margin: "5px"}}>
        <Space style={{ marginBottom: 16 }}>
            <Button onClick={() => {
                history.push('/')
                window.location.reload(true);
            }}>Назад</Button>
        </Space>

        <List.Item>
            <List.Item.Meta
                title={data.address}
                description="Адрес"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.buildings_disrepair}
                description="Аварийность зданий"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.buildings_management}
                description="Управление зданиями"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.buildings_repair}
                description="Ремонт зданий"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.computers}
                description="компьютеры"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.copies}
                description="экземпляры"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.copies_electronic}
                description="копии электронные"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.copies_issued}
                description="выпущено копий"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.copies_issued_children}
                description="выдано копий детям"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.digital_catalogs}
                description="электронные каталоги"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.dropped_copies}
                description="упавшие копии"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.electronic_catalogue_volume}
                description="объем электронного каталога"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.employees}
                description="количество сотрудников"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.employees_staff}
                description="штат сотрудников"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.formname}
                description="наименование формы"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.fullname}
                description="полное наименование"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.funds}
                description="средства"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.funds_acquisition}
                description="приобретение средств"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.funds_entrepreneurial}
                description="средства бюджета"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.internet_catalogs}
                description="средства предпринимательской-каталоги"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.funds_main_activity}
                description="средства основной деятельности, тыс. руб."
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.funds_staff}
                description="средства персонала, тыс. руб."
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.funds_used}
                description="использованные средства"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.individual_subscribers_}
                description="индивидуальные абоненты (информационные услуги), ед."
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.internet}
                description="интернет"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.internet_catalogs}
                description="интернет-каталоги"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.internet_catalogue_volume}
                description="объём интернет каталога"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.issued_electronic}
                description="выпущено в электронном виде"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.kopuk}
                description="копейка"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.libraries}
                description="библиотеки"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.libraries_computers}
                description="библиотеки компьютеров"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.number_of_personal_computers_in_libraries}
                description="количество персональных компьютеров в библиотеках, ед."
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.order}
                description="заказ"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.out_of_instances}
                description="из экземпляров"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.period}
                description="период"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.received_copies}
                description="получили экземпляры"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.received_electronic}
                description="получено в электронном виде"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.site}
                description="сайт"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.staff_higheeducated}
                description="персонал с высшим образованием"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.staff_vocational}
                description="штат профессиональных работников"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.subscribers}
                description="Подписчики"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.territory}
                description="Территория"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.users}
                description="Пользователи"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.users_children}
                description="Пользователи дети"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.visits}
                description="Посещений"
            />
        </List.Item>
        <List.Item>
            <List.Item.Meta
                title={data.visits_sites}
                description="Посещений сайтов"
            />
        </List.Item>

    </div>;

};

export default InfoLibrary