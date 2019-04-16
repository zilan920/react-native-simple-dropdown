import { View, StyleSheet, Text } from 'react-native';

import React, {Component} from "react";
import DropDown from './DropDown';

export default class Example extends Component {
    constructor(props){
        super(props);
        this.state = {text: ''}
    }


    render() {
        return <View>
            <DropDown
                selectorRef={'EXAMPLE_DROPDOWN'}
                optionListRef={'EXAMPLE_LIST'}
                placeholder={'我是提示'}
                data={['选择个屁', '哈哈哈哈']}
                dataExtractor={(text, i) => <Option
                    key={'Option' + i}
                    style={style.optionStyle}>{text}
                </Option>}
                onSelect={(a) => {console.log(a); this.setState({text: a})}}
                SelectStyle={style.selectStyle}
                selectOptionStyle={style.selectOptionStyle}
                textStyle={style.styleText}
                dropDownStyle={style.optionStyle}
                dropDownTextStyle={style.styleText}/>
            <Text>{this.state.text}</Text>
        </View>
    }
}


const style = StyleSheet.create({
    selectStyle: {},
    selectOptionStyle: {
        height: 50,
        backgroundColor: '#fff9e6',
        borderRadius: 5,
    },
    styleText: {
        marginLeft: 10,
        color: '#1f1e25',
        fontSize: 28
    },
    optionStyle: {
        marginLeft: 10,
        color: '#1f1e25',
        fontSize: 20,
        height: 48,
        borderBottomWidth: 0.5,
        borderBottomColor: '#f0f0f0'
    }
});
