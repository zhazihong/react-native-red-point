/**
 * Created by JetBrains WebStorm.
 * Author: zhazihong
 * Date: 2019/10/14
 * Time: 11:11
 * Desc: 消息未读数量显示 默认背景红色白色字体
 */

import {View, Text} from "react-native";
import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class RedPoint extends Component {

    // 默认值
    static defaultProps = {
        bgColor: '#ff0000',
        fontSize: 12,
        fontColor: '#ffffff',
    };

    // 入参定义
    static propTypes = {
        nums: PropTypes.number.isRequired, // 必传
        bgColor: PropTypes.string,
        fontSize: PropTypes.number,
        fontColor: PropTypes.string,
    };

    render() {

        const {nums, bgColor, fontColor, fontSize} = this.props;

        // 没有未读消息时，占位
        if (!nums) {
            return null;
        }
        // 大于99条消息 只显示99
        const showNums = nums > 99 ? '99+' : nums;

        return (
            <View style={{
                minWidth: 18,
                height: 18,
                borderRadius: 9,
                padding: 2,
                backgroundColor: bgColor,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{fontSize: fontSize, color: fontColor, marginBottom: 2}}>{showNums}</Text>
            </View>
        );
    }
}
