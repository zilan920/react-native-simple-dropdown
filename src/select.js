import React, {Component,} from 'react';
import {Dimensions, StyleSheet, View, ScrollView, TouchableWithoutFeedback, Text} from 'react-native';
import PropTypes from 'prop-types'

import Option from './option'

const window = Dimensions.get('window');

const SELECT = 'SELECT';

const styles = StyleSheet.create({
    container: {
    }
});

export default class Select extends Component {
    constructor(props) {
        super(props);

        this.pageX = 0;
        this.pageY = 0;

        this.state = {
            placeholder: this.getDefaultPlaceHolder()
        }
    }

    getDefaultPlaceHolder () {
        if (this.props.placeholder) {
            return this.props.placeholder;
        }
        const { data, dataExtractor } = this.props;
        if (Array.isArray(data) && data.length > 0) {
            return dataExtractor(data[0], -1)
        }
        return '';
    };

    getShownOptions () {
        const { data, dataExtractor } = this.props;
        if (Array.isArray(data) && data.length > 0) {
            return data.map((item, i) => dataExtractor(item, i))
        }
        return '';
    }

    checkChildrenProps(nextProps) {
        if ((this.props.data.length !== nextProps.data.length) && !(nextProps.data.find(child => child && child === this.state.placeholder))) {
            this.setState({placeholder: this.getDefaultPlaceHolder()});
        }
    };

    componentWillReceiveProps(nextProps) {
        this.checkChildrenProps(nextProps);
    }

    reset() {
        this.setState({placeholder: this.getDefaultPlaceHolder()});
    }

    _currentPosition(pageX, pageY) {
        const { height } = this.props;
        this.pageX = pageX;
        this.pageY = pageY + height;
    }

    show() {
        this._onPress()
    }

    _onPress() {
        const {optionListRef, onSelect, width, height, optionListExtraWidth, optionListLeftOffset, optionListTopOffset, optionListProps} = this.props;
        const {topOffset = 0, leftOffset = 0, extraWidth = 0} = optionListProps
        const shownOptions = this.getShownOptions();
        if (!(shownOptions && shownOptions.length)) {
            return false;
        }
        optionListRef()._show(
            shownOptions, this.pageX + leftOffset, this.pageY + topOffset, width + extraWidth, height,
            (item, value = item) => {
                if (item) {
                    this.setState({
                        placeholder: item
                    }, () => onSelect(value));
                }
            }, optionListProps);
    }

    render() {
        const {width, height, style, styleOption, styleText } = this.props;
        const dimensions = {width, height};

        return (
            <TouchableWithoutFeedback onPress={this._onPress.bind(this)}>
                <View ref={SELECT} style={[styles.container, style, dimensions]}>
                    <Option style={ styleOption }
                            styleText={styleText}>{this.state.placeholder}</Option>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

Select.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    optionListRef: PropTypes.func.isRequired,
    onSelect: PropTypes.func,
    optionListProps: PropTypes.object
};

Select.defaultProps = {
    width: 200,
    height: 40,
    onSelect: () => {
    },
    optionListProps: {}
};

