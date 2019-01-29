import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './mine.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      title: '首页',
      list: [1, 2, 3]
    }
  }

  config = {
    navigationBarTitleText: '我的'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>{this.state.title}</Text>
        <View> {this.state.list.map(item => {
            return (
              <View className='item'>{item}</View>
            )
          })}
        </View>
      </View>
    )
  }
}

