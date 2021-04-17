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
import { Icon24Add } from '@vkontakte/icons';
import { PanelHeaderBack, FormItem } from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";


import './bold.css'


const Prof = () => {
return(
<>
<Panel>
<PanelHeader left={<PanelHeaderBack></PanelHeaderBack>}>Родитель{<Icon20Write className = 'kar'></Icon20Write>}</PanelHeader>
</Panel>
<Group>
<Banner
before={<Avatar size={96} mode="image" src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mx.." />}
header="Иванов Иван"
subheader="19.10.1988"
// actions={<Button before={<Icon24Play />}>Слушать</Button>}
/>

<FormItem top="Ребенок">
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
export default Prof