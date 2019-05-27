import React from 'react';
import UserCard from './UserCard';

const UserCardWrapper = () => {
return (
    <div>
        <UserCard
            name="Taro"
            // 함수를 전달하면 Presentational Components 쪽에서 실행할 수 있음
            onClickFunction={() => { console.log("UserCard") }}
        />
    </div>
    )
}
export default UserCardWrapper