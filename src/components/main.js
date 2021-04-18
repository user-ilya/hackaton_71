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
import { Icon20Write } from '@vkontakte/icons';
import PropTypes from 'prop-types';
import Counter from '@vkontakte/vkui/dist/components/Counter/Counter'
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton'
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
import { Icon24Add, Icon12ChevronOutline } from '@vkontakte/icons';
import { PanelHeaderBack, FormItem, SubnavigationButton, SubnavigationBar, Link, NativeSelect } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";

const Main = () => {
    return (
        <>
        <Div></Div>
        <Div>
            <Button stretched mode="primary" size="m">Регистрация</Button>
        </Div>
        <FormItem top="Город">
			<Input type="text" placeHolder={"Введите ваш город"} />
		</FormItem>
		<FormItem top="Вид деятельности">
			<Input type="text" placeHolder={"Введите вид деятельности"} />
		</FormItem>
        <FormItem top="Интересы">
			<Input type="text" placeHolder={"Введите интересы"} />
		</FormItem>
		<FormItem top="Возраст">
			<Input type="text" placeHolder={"Введите ваш возраст"} />
		</FormItem>
    </>
    )
}
export default Main