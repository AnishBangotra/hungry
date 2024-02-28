import { useCreateMyRestaurant, useGetMyRestaurant, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading} = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updatedRestaurant, isLoading: isUpdateLoading } = useUpdateMyRestaurant();
  
  const isEditing = !!restaurant;
  
  return (
    <ManageRestaurantForm 
      restaurant={restaurant} 
      onSave={isEditing ? updatedRestaurant : createRestaurant} 
      isLoading={isCreateLoading || isUpdateLoading} />
  )
}

export default ManageRestaurantPage;