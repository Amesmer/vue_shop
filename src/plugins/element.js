import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Timeline from './timeline/index.js'
import TimelineItem from './timeline-item/index.js'

Vue.use(Element)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.prototype.$message = Element.Message
Vue.prototype.$confirm = Element.MessageBox.confirm
