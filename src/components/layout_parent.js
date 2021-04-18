import React, { Component, useState } from 'react';
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
import { PanelHeaderBack, FormItem, SubnavigationButton, SubnavigationBar, Link, Tabs, TabsItem, Textarea} from '@vkontakte/vkui';
import "@vkontakte/vkui/dist/vkui.css";
import './styleParentPage.css'




export default class LayoutParent extends Component {
    constructor(props){
        super(props)

        this.state = {
            mainPanel: 'panel4',
            modalPanel: 'modal-panel3',
            activeView: 'main',
        }
        this.changeHandle = this.changeHandle.bind(this)
    }

    changeHandle = (e) => {
        this.setState((e) => {
            e.target.id
        }) 
    }
       
    render() {
        return (
            <>
            <Group>
                <Panel id="modal-panel4">
                    <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ modalPanel: 'modal-panel3' })} />}>
                    <Tabs>
                        <TabsItem id ='info' 
                            onChange={this.changeHandle}
                            selected>Информация</TabsItem>
                        <TabsItem 
                            id='list'
                            onChange={this.changeHandle}
                            >Расписание</TabsItem>
                    </Tabs>
                    </PanelHeader>
                </Panel>
            </Group>
            <Group>
                <Header mode="primary" aside={<Link> Подробнее</Link>}
                        indicator={<Counter size="s" mode="prominent">3</Counter>}
                        >Рейтинг
                </Header>
                <Header mode="primary" aside={<Link> Подробнее</Link>}
                    indicator={<Counter size="s" mode="prominent">3</Counter>}
                    >Достижения
                </Header>
            </Group>
            <FormItem top="Записка родителю">
                <Textarea placeholder="Добавьте заметку" />
            </FormItem>
            <Div></Div>
            <Div>
                <Button stretched mode="primary" size="m">Написать преподавателю</Button>
            </Div>
        </>
        )
    }
}