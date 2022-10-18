import React from 'react';
import './index.css';
import { Success } from './components/listUser/success/Success';
import { Users } from './components/listUser/Users';

function AppList() {
    const [users, setUsers] = React.useState([]);
    const [isLoading, setLoading] = React.useState([true]);
    const [searchValue, setSearchValue] = React.useState('');
    const [invites, setInvites] = React.useState([]);
    const [success, setSuccess] = React.useState(false);

    React.useEffect(() => {
        fetch('https://reqres.in/api/users').then(res => res.json()).then(json => {
            setUsers(json.data);
            console.log(json.data);
        }).catch(err => {
            console.warn(err);
            alert('Ошибка при загрузки даных, попробуйте позже!');
        }).finally(() => setLoading(false))
    }, []);

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            setInvites(prev => [...prev, id])
        }
    }

    const onClickSendInvites = () => {
        setSuccess(true);
    }


  return (
    <div className="AppList">
        {
            success ? ( <Success count={invites.length}/>
            ) : (
                <Users
                    onChangeSearchValue={onChangeSearchValue}
                    searchValue={searchValue}
                    items={users}
                    isLoading={isLoading}
                    invites={invites}
                    onClickInvite={onClickInvite}
                    onClickSendInvites={onClickSendInvites}
                />
            )
        }
    </div>
  );
}

export default AppList;
