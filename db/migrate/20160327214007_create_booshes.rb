class CreateBooshes < ActiveRecord::Migration
  def change
    create_table :booshes do |t|
      t.integer :user_id
      t.text :body


      t.timestamps null: false
    end
  end
end
