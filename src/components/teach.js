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
import { PanelHeaderBack, FormItem, Radio, NativeSelect, Textarea, Counter } from '@vkontakte/vkui';
import {Icon24Add} from '@vkontakte/icons'
import "@vkontakte/vkui/dist/vkui.css";



const Parent = () => {
    return (
        <>
			<FormItem top="Фамилия">
			<Input type="text" placeHolder={"Введите фамилию"} />
		</FormItem>
		<FormItem top="Имя">
			<Input type="text" placeHolder={"Введите имя"} />
		</FormItem>
		<FormItem top="Отчество">
			<Input type="text" placeHolder={"Введите отчество"} />
		</FormItem>
		<FormItem top="Город">
			<NativeSelect>
				<option value="Tula">Тула</option>
				<option value="Kaluga">Калуга</option>
				<option value="Moscow">Москва</option>
				<option value="Belgorod">Белгород</option>
			</NativeSelect>
        </FormItem>
        <FormItem top="Дата рождения">
			<Input type="data" />
		</FormItem>
        <FormItem top="О себе">
          <Textarea placeholder="Расскажите о себе" />
        </FormItem>
        <Div>
            <Button mode="outline" size="l" before={<Icon24Add/>} after={<Counter>16</Counter>}>Add item</Button>
        </Div>

        <Div>
            <Button stretched mode="primary" size="m">Регистрация</Button>
        </Div>
        </>
    )
}

export default Parent;