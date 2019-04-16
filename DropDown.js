import { View } from 'react-native';

import {
    Select,
    Option,
    OptionList, updatePosition
} from './src';
import React, {Component} from "react";


export default class DropDown extends Component {
    // static propTypes = {
    //     selectorRef: propTypes.string,
    //     optionListRef: propTypes.string,
    //     placeholder: propTypes.string,
    //     data: propTypes.Array,
    //     dataExtractor: propTypes.func,
    //     onSelect: propTypes.func,
    //     SelectStyle: propTypes.object,
    //     selectOptionStyle: propTypes.object,
    //     textStyle: propTypes.object,
    //     dropDownStyle: propTypes.object,
    //     dropDownTextStyle: propTypes.object
    // };

    constructor(props) {
        super(props);
        debugger;
        this.selectorRef = this.props.selectorRef;
        this.optionListRef = this.props.optionListRef;
    }

    componentDidMount() {
        updatePosition(this.refs[this.selectorRef]);
        updatePosition(this.refs[this.optionListRef]);
    }

    _getOptionList() {
        return this.refs[this.optionListRef];
    }

    render() {
        return (
            <View>
                <View style={{
                    width: 300,
                    height: 200,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Select
                        ref={this.selectorRef}
                        width={250}
                        height={50}
                        optionListRef={this._getOptionList.bind(this)}
                        placeholder={this.props.placeholder}
                        style={this.props.SelectStyle}
                        styleOption={this.props.selectOptionStyle}
                        styleText={this.props.textStyle}
                        onSelect={this.props.onSelect.bind(this)}
                        data={this.props.data}
                        dataExtractor={this.props.dataExtractor}/>
                </View>
                <OptionList ref={this.optionListRef}/>
            </View>
        );
    }
}
