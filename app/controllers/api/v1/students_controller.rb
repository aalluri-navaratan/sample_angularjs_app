# info everybody should returns status code for each action and test response in rspec
module Api
  # Sub Module V1
  module V1
    # Students controller
    class StudentsController < ApplicationController

      def index
        #render :json => "name"
        @students = Student.all
        #render :json => @students
        render json: SampleAngularjsApp::JsonApi::Students::CollectionWriter.new.write('students', @students, params)
      end

      def create
      end

      def show
      end

      def update
      end

      def destroy
      end

      private

      def student_params
      end

    end
  # cloded the Students controller
  end
# closed the V1 Module
end
