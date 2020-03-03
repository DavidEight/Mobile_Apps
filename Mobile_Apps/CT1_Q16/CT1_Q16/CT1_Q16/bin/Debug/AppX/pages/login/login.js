// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";
    var UserArray = WinJS.Binding.define({Name:"",Password:""});
    WinJS.UI.Pages.define("/pages/login/login.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            document.getElementById("lregisterBtn").addEventListener("click", registerPage);
            document.getElementById("lloginBtn").addEventListener("click", login);
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();

function registerPage()
{

    WinJS.Navigation.navigate("/pages/register/register.html");
}
function login()
{
    var lastIndex = Windows.Storage.ApplicationData.current.localSettings.values["LastIndex"];
    var composite = new Windows.Storage.ApplicationDataCompositeValue();

    var id=document.getElementById("lidtxt").value;
    var pass= document.getElementById("lpasstxt").value;
    if (id == "" || pass == "") {
        document.getElementById("lmsg").innerText = "Id or Pass cannot be blank";
    }
    else {
        for (var i = 0; i < lastIndex; i++)
        {
          //  var stry = new UserArray();
            var tuser = Windows.Storage.ApplicationData.current.localSettings.values["User" + i];
            //var obj = { UserName: id, Password: pass };
            if (id == tuser.userName && pass == tuser.password) {

                WinJS.Navigation.navigate("/pages/home/home.html");
            }
            else {
                WinJS.Navigation.navigate("/pages/login/login.html");
                document.getElementById("lmsg").innerText = "Incorrect ID and password";
            }
               
        }


    }


  
   

}
