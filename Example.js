import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native';


import {
    Select,
    Option,
    OptionList,
    updatePosition
} from 'src/index';
import React, {Component} from "react";

export default class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            canada: ''
        };
    }

    componentDidMount() {
        updatePosition(this.refs['SELECT1']);
        updatePosition(this.refs['OPTIONLIST']);
    }

    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }


    _canada(province) {

        this.setState({
            ...this.state,
            canada: province
        });
    }

    render() {
        return (
            <View>
                <View style={style.container}>
                    <Select
                        ref="SELECT1"
                        width={250}
                        height={50}
                        optionListRef={this._getOptionList.bind(this)}
                        placeholder="Select a Province in USA ..."
                        style={style.SelectStyle}
                        styleOption={style.selectOptionStyle}
                        styleText={style.styleText}
                        onSelect={this._canada.bind(this)}
                        data={['nishuia', 'Alberta', 'British Columbia', 'Who am ', 'What is this ']}
                        dataExtractor={(text, i) => <Option
                            key={'Option' + i}
                            style={style.optionStyle}>{text}
                        </Option>}/>
                    <Text>Selected province of Canada: {this.state.canada}</Text>
                </View>
                <OptionList ref="OPTIONLIST"/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        width: 300,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    SelectStyle: {},
    selectOptionStyle: {
        height: 50,
        backgroundColor: '#fff9e6',
        borderRadius: 5,
    },
    styleText: {
        marginLeft: 10,
        color: '#1f1e25',
        fontSize: 20
    },
    optionStyle: {
        marginLeft: 10,
        color: '#1f1e25',
        fontSize: 15,
        height: 48,
        borderBottomWidth: 0.5,
        borderBottomColor: '#f0f0f0'
    }

});
