// assets
import { LoginOutlined, ProfileOutlined, UserOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    UserOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const demos = {
    id: 'demos',
    title: '管理功能',
    type: 'group',
    children: [
        {
            id: 'users',
            title: '用户管理',
            type: 'item',
            url: '/users',
            icon: icons.UserOutlined,
            target: false
        }
    ]
};

export default demos;
