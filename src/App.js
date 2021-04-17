import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import { AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Add from './components/Add_children'
import Prof from './components/prof_rod'

const App = () => {
	return (
		<>
			<Home/> 
			{/* <Add/>  */}
			{/* <Prof/> */}
		</>	
	)
}

export default App;

