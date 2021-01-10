const INITIAL_STATE = {
    sections: [
        {
          title: 'hats',
          imageUrl: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGF0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://images.unsplash.com/photo-1542482378-4e3530c8e525?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0c3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://images.unsplash.com/photo-1508188239917-0fc5f653cb47?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fHNuZWFrZXJzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://images.unsplash.com/photo-1533287585219-beaab4c637b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ0fHx3b21lbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://images.unsplash.com/photo-1553988198-6500949e8dd4?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTF8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
}

const directoryReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer