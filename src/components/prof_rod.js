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
import { PanelHeaderBack, FormItem, SubnavigationButton, SubnavigationBar, Link } from '@vkontakte/vkui';
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
            before={<Avatar size={96} mode="image" src={'https://gorobzor.ru/public/news/images/61378.jpg'}/>}//поставить картинку
            header="Иванов Иван"
            subheader="19.10.1988"
        // actions={<Button before={<Icon24Play />}>Слушать</Button>}
    />

    <Header mode="primary" aside={<Link> Подробнее</Link>}
        indicator={<Counter size="s" mode="prominent">3</Counter>}
        >Алина Никитина
    </Header>
    <Header mode="primary" aside={<Link> Подробнее</Link>}
        >Роман Чижкин
    </Header>
    <Header mode="primary" aside={<Link> Подробнее</Link>}
        >Алексей Малинин
    </Header>
    
    <Div>
       <Button mode="outline" size="l" before={<Icon24Add/>}>Добавить ребенка</Button>
     </Div>
{/* <Banner
before={<Avatar size={96} mode="image" src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg" />}
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

