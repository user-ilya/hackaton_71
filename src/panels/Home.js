import React, { useState } from 'react';
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
import { PanelHeaderBack, FormItem, Radio, NativeSelect } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";

import Parent from '../components/parent'
import Teach from '../components/teach'
import Teacher from '../components/teacher'
import './Home.css'


const Home = () => {
	
	let content
	const [value,setValue] = useState(1);

	const changeHandle = (e) => {
		setValue(e.target.value) 
	}

	return(
		<>
	<Panel>
		<PanelHeader left={<PanelHeaderBack></PanelHeaderBack>}>Регистрация</PanelHeader>
	</Panel>
	<Group>
		<Group>
			<Radio 
				name="radio" 
				id='teach' 
				value="1" 
				defaultChecked
				onChange={changeHandle} >Ученик</Radio>
			<Radio 
				name="radio" 
				id= 'parent'
				value="2" 
				onChange={changeHandle}
				>Родитель</Radio>
			<Radio 
				name="radio" 
				id= 'teacher' 
				value="3" 
				onChange={changeHandle}
				>Преподаватель</Radio>
		</Group>
		{{
			1: <Teach/>,
			2:<Parent/>,
			3:<Teacher/>
		}[value]}
	</Group>
	</>
	)
	
}
export default Home


{/* <Banner
			before={<Avatar size={96} mode="image" src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg" />}
			header="Баста в Ледовом"
			subheader="Большой концерт"
			asideMode="dismiss"
			actions={<Button>Подробнее</Button>}
      	/> */}