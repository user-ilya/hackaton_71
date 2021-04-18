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
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import { Icon24Add } from '@vkontakte/icons';
import { PanelHeaderBack, FormItem } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";


import '../components/Home.css'


const Add = () => {
    return(
        <>
        <Panel>
            <PanelHeader left={<PanelHeaderBack></PanelHeaderBack>}>Добавить ребенка</PanelHeader>
        </Panel>
        <Group>
            <FormItem top="Фамилия ребенка">
                <Input type="text" placeHolder={"Введите фамилию"} />
            </FormItem>
            <FormItem top="Имя ребенка">
                <Input type="text" placeHolder={"Введите имя"} />
            </FormItem>
            <FormItem top="Отчество ребенка">
                <Input type="text" placeHolder={"Введите отчество"} />
            </FormItem>
            <FormItem top="Город">
                <Select
                placeholder="Не выбран"
                //options={getRandomUsers(10).map(user => ({ label: user.name, value: user.id, avatar: user.photo_100 }))}
                renderOption={({ option, ...restProps }) => (
                <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
                )}
                />
            </FormItem>
            <FormItem top="Название секции">
                <Select
                placeholder="Не выбран"
                //options={getRandomUsers(10).map(user => ({ label: user.name, value: user.id, avatar: user.photo_100 }))}
                renderOption={({ option, ...restProps }) => (
                <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
                )}
                />
            </FormItem>
            <Div>
                <Button mode="outline" size="l" before={<Icon24Add/>}>Добавить ребенка</Button>
            </Div>
        {/* <Banner
        before={<Avatar size={96} mode="image" src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLg.." />}
        header="Баста в Ледовом"
        subheader="Большой концерт"
        asideMode="dismiss"
        actions={<Button>Подробнее</Button>}
        /> */}
        </Group>
        </>
    )
}
export default Add