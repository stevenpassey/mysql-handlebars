window.onload = function () { 

	document.getElementById('burger-name').onkeyup = function (e) {
		if(e.keyCode === 13)
		{
			createBurger(document.getElementById('burger-name').value);
		}
	}
}

function eatThisBurger(id)
{
	ajax("/burger", "PUT", "burger_id=" + id).then(successfulAjax, errorAjax);
}

function deleteThisBurger(id)
{
	ajax("/burger", "DELETE", "burger_id=" + id).then(successfulAjax, errorAjax);
}

function createBurger(name)
{
	if(name === "")
	{
		return;
	}
	ajax("/burger", "POST", "burger_name=" + name).then(successfulAjax, errorAjax);
}

function successfulAjax(res)
{
	location.reload();
}

function errorAjax(error)
{
	console.log(error);
}

function ajax(url, method, dataString)
{
	return new Promise(function(res, rej) {
		let xhttp = new XMLHttpRequest();
		xhttp.open(method, url, true);

		xhttp.onload = function() {
			if(xhttp.status == 200)
			{
				res(xhttp.responseText);
			}
			else
			{
				rej(xhttp.statusText);
			}
		};

		xhttp.onerror = function () {
			rej("Could not create XMLHttpRequest()");
		};
		
		if(method !== "GET")
		{
			xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhttp.send(dataString);
		}
		else
		{
			xhttp.send();
		}
	});
}

