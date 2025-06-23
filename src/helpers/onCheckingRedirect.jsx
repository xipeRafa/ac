

export const onCheckingRedirect =(navigateTo)=>{


        if(localStorage.status === undefined || localStorage.status === 'not-authenticated'){

                localStorage.userName=''
                localStorage.status = 'not-authenticated'

                if(location.pathname !== '/ac/auth/login/' &&
                   location.pathname !== '/ac/auth/register/'){
                        // console.log('not-authenticated and redirected to: /ac/auth/login/') 
                        navigateTo('/ac/auth/login/')    
                }


                if(localStorage.usersRegistered === undefined){
                        localStorage.usersRegistered = JSON.stringify([{correo:'noexiste'}])    
                }  

                  
                
        }


        if(localStorage.status === 'authenticated'){

                // console.log('authenticated and redirected to: ', location.pathname)

                if(location.pathname === '/ac/auth/login/' ||
                   location.pathname === '/ac/auth/register/'){
                        // console.log('authenticated and redirected to: /ac/') 
                        navigateTo('/ac/')   
                }

        }

        
        // console.log(localStorage.status)

}













// export const onCheckingRedirect = (navigateTo) => {
//     const status = localStorage.status || 'not-authenticated';
//     const currentPath = location.pathname;

//     if (status === 'not-authenticated') {
//         localStorage.status = status;
//         localStorage.userName = '';

//         if (!['/ac/auth/login/', '/ac/auth/register/'].includes(currentPath)) {
//             console.log('not-authenticated and redirected to: /ac/auth/login/');
//             navigateTo('/ac/auth/login/');
//         }

//         if (!localStorage.usersRegistered) {
//             localStorage.usersRegistered = JSON.stringify([{ correo: 'noexiste' }]);
//         }
//     } else if (status === 'authenticated') {
//         console.log('authenticated and redirected to: ', currentPath);

//         if (['/ac/auth/login/', '/ac/auth/register/'].includes(currentPath)) {
//             console.log('authenticated and redirected to: /ac/');
//             navigateTo('/ac/');
//         }
//     }
// };
