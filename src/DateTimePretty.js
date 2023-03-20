import React from 'react';
import DateTime from './DateTime'
import Moment from 'moment'
import 'moment/locale/ru';

function withLogger(Component) {
    return class extends React.Component {
        state = {
            date: ``
        }
    
        componentDidMount() {
            this.count()
        }
        count() {
            const resultDeffDays = Moment().diff(Moment(this.props.date), 'd')
            const resultDeffHours = Moment().diff(Moment(this.props.date), 'H')
            const resultDeffMin = Moment().diff(Moment(this.props.date), 'm')

            if(resultDeffDays >= 1) {
                console.log(`${resultDeffDays} дней назад`)
                this.setState({date:`${resultDeffDays} дней назад`})
            } else if(resultDeffHours >= 1) {
                this.setState({date:`${resultDeffHours} час(ов) назад`})
            } else if(resultDeffHours < 1) {
                this.setState({date: `${resultDeffMin} минут назад`})
            }
        }
        render() {
            return <Component {...this.props} date={this.state.date} />
        }
    }
}

const DateTimePretty = withLogger(DateTime)
export default DateTimePretty