import Swal from "sweetalert2";



export const useAuthAlerts = () => {






  const ToastLogin = () => {
    const ToastLogin = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      //title: 'center-',
      timer: 8000,
      theme: "dark",
      timerProgressBar: true,
      //background:'linear-gradient(#000,#000,#000,#000,#000,#000,#000,#fff',
      //background:'black',
      //draggable: false,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
      customClass: {
        container: "alertContainer",
        title: "customAlert",
      },
      width: "60%",
      showCloseButton: true,
    });

    ToastLogin.fire({
      icon: "success",
      title: "Acceso Correcto",
    });
  };












  const ToastRegistred = () => {
    const ToastRegistred2 = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 6000,
      theme: "dark",
      timerProgressBar: true,
      //background:'linear-gradient(#000,#000,#000,#000,#000,#000,#000,#fff',
      //background:'black',
      //draggable: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
      customClass: {
        container: "alertContainer",
        title: "customAlert",
      },
      showCloseButton: true,
    });

    ToastRegistred2.fire({
      icon: "success",
      title: "Registro Correcto",
    });
  };










  const alertLogout = (dispatch, navigateTo, onLogout) => {
    Swal.fire({
      title: "Quiere Salir?",
      text: "Desea Cerrar Cesión ?",
      icon: "question",
      // buttons: true,
      // dangerMode: true,
      showCancelButton: true,
      confirmButtonColor: "#015887",
      cancelButtonColor: "#d93526",
      confirmButtonText: "SALIR ➪",
      cancelButtonText: "Cancelar",
      //color: "#716add",
      //background:'red',
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: `Operador Fue Borrado!`,
        //   text: usuario.name,
        //   icon: "success",
        //   buttonColor: "#014063",
        // })

        //localStorage.clear();
        localStorage.status = "not-authenticated";
        localStorage.userName = "";
        dispatch(onLogout());
        navigateTo("/ac/auth/login");
      } else {
        // Swal.fire({
        //   title: 'No Fue Borrado',
        //   text: "Está a Salvo",
        //   // icon: "success",
        //    okButtonColor: "#014063",
        // })
      }
    });
  };














  return {
    ToastLogin,
    ToastRegistred,
    alertLogout,
  };
};
