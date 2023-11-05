async function handleHttpErrors(res) {
    if (!res.ok) {
        const errorResponse = await res.json();
        const error = new Error(errorResponse.message);
        // @ts-ignore
        error.fullResponse = errorResponse;
        throw error;
    }
    return res.json();
}

export async function fetchGetJson(URL, token = null) {
    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    options.credentials = "include";
    const data = await fetch(URL, options).then(handleHttpErrors);
    return data;
}

export async function fetchPostJson(URL, token = null) {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    options.credentials = "include";
    const addedData = await fetch(URL, options).then(handleHttpErrors);
    return addedData;
}

export async function fetchPostJsonFormData(URL, form, token = null) {
    let formElement = /** @type {HTMLFormElement} */ (form);
    const formData = new FormData(formElement);
    const dataFromForm = {};
    formData.forEach((value, key) => (dataFromForm[key] = value));
    let options = {
        method: "POST",
        body: JSON.stringify(dataFromForm),
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    options.credentials = "include";
    const addedData = await fetch(URL, options).then(handleHttpErrors);
    return addedData;
}

export async function fetchPatchJson(URL, token = null) {
    let options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    options.credentials = "include";
    const addedData = await fetch(URL, options).then(handleHttpErrors);
    return addedData;
}

export async function fetchPatchJsonFormData(URL, form, token = null) {
    let formElement = /** @type {HTMLFormElement} */ (form);
    const formData = new FormData(formElement);
    const dataFromForm = {};
    formData.forEach((value, key) => (dataFromForm[key] = value));
    let options = {
        method: "PATCH",
        body: JSON.stringify(dataFromForm),
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    options.credentials = "include";
    const addedData = await fetch(URL, options).then(handleHttpErrors);
    return addedData;
}

export async function fetchPutJson(URL, token = null) {
    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    options.credentials = "include";
    const addedData = await fetch(URL, options).then(handleHttpErrors);
    return addedData;
}

export async function fetchPutJsonFormData(URL, form, token = null) {
    let formElement = /** @type {HTMLFormElement} */ (form);
    const formData = new FormData(formElement);
    const dataFromForm = {};
    formData.forEach((value, key) => (dataFromForm[key] = value));
    let options = {
        method: "PUT",
        body: JSON.stringify(dataFromForm),
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    options.credentials = "include";
    const addedData = await fetch(URL, options).then(handleHttpErrors);
    return addedData;
}

export async function fetchDelete(URL, token = null) {
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }
    options.credentials = "include";
    const deletedData = await fetch(URL, options).then(handleHttpErrors);
    return deletedData;
}