Rails.application.routes.draw do
  resources :appointments
  get 'appointments' => "appointments#index"

  get 'appointments/create'

  get 'appointments/update'

  get 'appointments/destroy'

  get 'main/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'main#index'

end
