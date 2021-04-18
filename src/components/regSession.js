import React from 'react';
import {
AdaptivityProvider,
ConfigProvider,
useAdaptivity,
AppRoot,
SplitLayout,
SplitCol,
ViewWidth,
View,
SimpleCell
} from "@vkontakte/vkui";

import PropTypes from 'prop-types';
import Banner from '@vkontakte/vkui/dist/components/Banner/Banner'
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import { Icon24Add } from '@vkontakte/icons';
import { PanelHeaderBack, FormItem, Radio, NativeSelect, Textarea } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";
import './bold.css'
import { Icon20Write } from '@vkontakte/icons';




const RegSession = () => {
    return (
    <>
    <Panel>
    <PanelHeader left={<PanelHeaderBack></PanelHeaderBack>}>Регистрация секции</PanelHeader>
    </Panel>
    <FormItem top="Название">
    <Input type="text" placeHolder={"Название"} />
    </FormItem>
    <FormItem top="Город">
    <Input type="text" placeHolder={"Город"} />
    </FormItem>
    <FormItem top="Адрес">
    <Input type="text" placeHolder={"Адрес"} />
    </FormItem>
    <FormItem top="Тип деятельности">
    <Input type="text" placeHolder={"Тип деятельности"} />
    </FormItem>
    <FormItem top="Адрес">
    <Input type="text" placeHolder={"Адрес"} />
    </FormItem>
    <FormItem top="Контакты">
    <Input type="text" placeHolder={"Контакты"} />
    </FormItem>
    <FormItem top="Номер сертификата">
    <Input type="text" placeHolder={"Номер сертификата"} />
    </FormItem>
    <FormItem top="О нас">
    <Textarea placeholder="О нас"/>
    </FormItem>

    <Div>
    <Button mode="outline" size="l" before={<Icon24Add/>}>Добавить преподавателя</Button>
    </Div>

    <Div>
        <Button stretched mode="primary" size="m">Регистрация</Button>
    </Div>
    </>
)
}

export default RegSession;