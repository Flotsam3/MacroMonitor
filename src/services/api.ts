import { Options } from "../context/OptionContext";

const URL: string = import.meta.env.VITE_API_URL || "/api";

export const createOptions = async (payload: object) => {
  try {
    const response = await fetch(URL + "/options", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Error creating options: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network or parsing error (createOptions):", error);
    return null;
  }
};

export const updateOptions = async (payload: object) => {
  try {
    const response = await fetch(URL + "/options", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Error updating options: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network or parsing error (updateOptions):", error);
    return null;
  }
};

export const getAllOptions = async () => {
  try {
    const response = await fetch(URL + "/options");

    if (!response.ok) {
      console.error(`Error fetching options: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network or parsing error (getAllOptions):", error);
    return null;
  }
};

export const createFood = async (payload: object) => {
  try {
    const response = await fetch(URL + "/food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Error creating food: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network or parsing error (createFood):", error);
    return null;
  }
};

export const getAllFood = async () => {
  try {
    const response = await fetch(URL + "/food");

    if (!response.ok) {
      console.error(`Error fetching food: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network or parsing error (getAllFood):", error);
    return null;
  }
};

export const deleteFoodItem = async (payload: object) => {
  try {
    const response = await fetch(URL + "/food", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Error deleting food item: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Network or parsing error (deleteFoodItem):", error);
  }
};

export const saveConsumption = async (payload: Options[]) => {
  try {
    const response = await fetch(URL + "/consumption", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Error saving consumption: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network or parsing error (saveConsumption):", error);
    return null;
  }
};

export const getConsumption = async () => {
  try {
    const response = await fetch(URL + "/consumption");

    if (!response.ok) {
      console.error(`Error fetching consumption: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network or parsing error (getConsumption):", error);
    return null;
  }
};

export const deleteConsumptionItem = async (id: string): Promise<void> => {
  try {
    const response = await fetch(URL + `/consumption/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(`Error deleting consumption item: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Network error (deleteConsumptionItem):", error);
  }
};

export const deleteConsumption = async (): Promise<void> => {
  try {
    const response = await fetch(URL + "/consumption", {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(`Error deleting all consumption: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Network error (deleteConsumption):", error);
  }
};

export const createArchiveItem = async (payload: object) => {
  try {
    const response = await fetch(URL + "/archive", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Error creating archive item: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network or parsing error (createArchiveItem):", error);
    return null;
  }
};

export const getArchive = async () => {
  try {
    const response = await fetch(URL + "/archive");

    if (!response.ok) {
      console.error(`Error fetching archive: ${response.status} ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network or parsing error (getArchive):", error);
    return null;
  }
};

export const deleteArchiveItem = async (id: string): Promise<void> => {
  try {
    const response = await fetch(URL + `/archive/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(`Error deleting archive item: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Network error (deleteArchiveItem):", error);
  }
};

export const deleteArchive = async (): Promise<void> => {
  try {
    const response = await fetch(URL + "/archive", {
      method: "DELETE",
    });

    if (!response.ok) {
      console.error(`Error deleting archive: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error("Network error (deleteArchive):", error);
  }
};

export const uploadImage = async (
  id: string,
  image: string,
  base64Image: string | ArrayBuffer
): Promise<void> => {
  try {
    const response = await fetch(URL + "/food/images/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ previousImage: image, image: base64Image }),
    });

    if (!response.ok) {
      console.error(`Error uploading image: ${response.status} ${response.statusText}`);
    }

    await response.json();
  } catch (error) {
    console.error("Network or parsing error (uploadImage):", error);
  }
};
