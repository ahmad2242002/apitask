import React, {useState, useEffect} from "react"
import Image from 'next/image'
const GetDataApi = ()=>{
	const [dataStore, setDataStore] = useState(null)
	
	const getData = () =>{
		return fetch("https://random-data-api.com/api/users/random_user?size=20").then((completeResponse)=>
			completeResponse.json()
		)
	}

	const setData= ()=>{
		getData().then((data)=>{
			setDataStore(data)
		})
	}

	useEffect(()=>{
		setData()
	}, [])
	
	return <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mx-2 sm:mx-5 lg:mx-32 mt-16">
		{dataStore?.map(({id, first_name, last_name,subscription,address,avatar})=>{
			return <div key={id} className=" flex bg-slate-50 m-3 h-60 rounded-2xl space-x-2 py-5 px-5 hover:bg-white hover:scale-110 hover:border-2 hover:cursor-pointer hover:shadow-lg border-slate-300">
					<div className=" relative h-32 w-32">
						<Image className = " rounded-full" src={avatar} alt="user image" layout="fit" fill></Image>
					</div>
					<div className=" my-auto">
						<h1 className=" text-xl font-bold">{first_name + " " + last_name}</h1>
						<h1 className=" text-base font-semibold">{address.city + ", " + address.country}</h1>
						<div className="flex flex-wrap space-x-1 mt-2">
							<div className=" rounded-3xl text-blue-500 shadow-sm items-center py-1 px-2 border-2">{subscription.plan}</div>
							<div className=" rounded-3xl text-blue-500 shadow-sm items-center py-1 px-2 border-2">{subscription.status}</div>
						</div>
					</div>
				</div>

		})}
	</div>
};

export default GetDataApi;