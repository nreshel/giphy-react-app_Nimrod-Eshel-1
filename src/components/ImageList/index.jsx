import React, { memo } from 'react';
import { ASYNC_STATUS } from "../../constants/LoadingStates";
import { useAppContext } from "../../context/appContext";
import { useAsync } from "../../hooks/useAsync";
import { LoadingSpinner } from "../LoadingSpinner";
import { UserAvatar } from "../../components";
import './ImageList.scss'
export const ImageList = memo(() => {
	const { appState, loadImageList } = useAppContext()
	const { imageList, appStatus } = appState
	const isAppLoading = appStatus === ASYNC_STATUS.PENDING

	const displayAvatar = (user) => {
		if(user !== undefined) {
			return <UserAvatar 
				user={user} 
				classes={['avatar_container']}
				showSocials={{instagram: true, giphy: true}}
			/>
		}
	}

	useAsync({asyncFunction: loadImageList})
	return <div className='image-list'>
		<LoadingSpinner isLoading={isAppLoading} >
			{imageList?.map((image) => {
				return (
					<div key={image.id} className="card_container">
						{displayAvatar(image?.user)}
						<img key={image.id} src={image.images.original.url} alt={image.title} className="giphy_image" />
					</div>
				)
			})}
		</LoadingSpinner>
	</div>
})