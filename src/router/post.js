
import ListView   from '../views/Post/ListView.vue'
import ShowView from '@/views/post/ShowView.vue'
import CreateView from '@/views/post/CreateView.vue'
import EditView from '@/views/post/EditView.vue'
let routers = [{
    path: '/posts',
    name: 'posts',
 //   props: true, title: 'posts list',
    component: ListView
},
{
    path: '/posts/:id',
    name: 'postDetails',
    // props: true, title: 'post details',

    component: ShowView
},
{
    path: '/posts/create',
    name: 'newPost',
    // props: true, title: ' create post',

    component: CreateView
}, {
    path: '/posts/:id/edit',
    name: 'editPost', props: true, title: 'edit post',

    component: EditView
}
]
export default routers