import {Bar, Icon, UserName, UserPhoto} from "./UserMenuStryle";
import SettingsIcon from '@mui/icons-material/Settings';


const UserMenu = () => {
    return (
        <div>
            <Bar>
                <UserPhoto></UserPhoto>
                <UserName>Olá, Matheus</UserName>
                <Icon><SettingsIcon sx={{ fontSize: 35 }} /></Icon>
            </Bar>
        </div>
    )
}

export default UserMenu;