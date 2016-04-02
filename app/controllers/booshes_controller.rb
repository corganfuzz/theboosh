class BooshesController < ApplicationController

  def index
    render json: Boosh.stream_for(current_user.id)
  end

  def create
    boosh = Boosh.create(body: params[:body], user_id: current_user.id)
    render json: boosh
  end

end
