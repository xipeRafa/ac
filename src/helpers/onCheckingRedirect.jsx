


export const onCheckingRedirect =(navigateTo)=>{


        let path = window.location.pathname

        let lss = ls('status')

        if(lss === undefined || lss === 'not-authenticated'){

            ls('userName', '')
            ls('status', 'not-authenticated')

            const isIncludes = ['/ac/auth/login/', '/ac/auth/register/', 
                                '/ac/auth/login', '/ac/auth/register'].includes(path)

            if (!isIncludes) {
                navigateTo('/ac/auth/login/');
            }

            if(ls('usersRegister') === undefined){
                ls('usersRegister', [{correo:'noexiste'}])
            }   
                
        }


        if(lss === 'authenticated'){

            if(['/ac/auth/login/', '/ac/auth/register/',
                 '/ac/auth/login', '/ac/auth/register'].includes(path)){

                navigateTo('/ac/')
            }

        }


}











