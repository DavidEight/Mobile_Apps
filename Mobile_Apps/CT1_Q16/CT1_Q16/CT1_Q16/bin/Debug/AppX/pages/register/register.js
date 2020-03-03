// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/register/register.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            document.getElementById("rregisterBtn").addEventListener("click", registerUser);
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
function registerUser()
{
    if (!Windows.Storage.ApplicationData.current.localSettings.values["LastIndex"]) {

        Windows.Storage.ApplicationData.current.localSettings.values["LastIndex"] = 0;
    }


    var  id= document.getElementById("ridtxt").value;
    var pass = document.getElementById("rpasstxt").value;
    var cpass = document.getElementById("rcpasstxt").value;
    if (id == "" || pass == "" || cpass == "")
    {
        document.getElementById("rmsg").innerText = "Please enter value in all the feilds";
    }
    else if (pass != cpass) {

        document.getElementById("rmsg").innerText = "Password and Confirm Password feilds must have same value";
    }
    else {

        if (pass == cpass)
        {

            var lastIndex = Windows.Storage.ApplicationData.current.localSettings.values["LastIndex"];
            var composite = new Windows.Storage.ApplicationDataCompositeValue();
            composite["userName"] = id;
            composite["password"] = pass;
            Windows.Storage.ApplicationData.current.localSettings.values["User" + lastIndex] = composite;

            Windows.Storage.ApplicationData.current.localSettings.values["LastIndex"] = lastIndex + 1;
            document.getElementById("rmsg").innerText = "registered successfully";
            

        }


    }

}