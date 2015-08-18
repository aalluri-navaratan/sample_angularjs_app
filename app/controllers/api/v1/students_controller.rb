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
        @student = Student.create!(student_params)
        render status: 201, json: SampleAngularjsApp::JsonApi::Students::SingleWriter.new.write('students', @student, params)
      rescue ActiveRecord::RecordInvalid => exception
        render status: 403, json: exception.record.errors
      end

      def show
        render status: 201, json: SampleAngularjsApp::JsonApi::Students::SingleWriter.new.write('student', @student, params)
        rescue ActiveRecord::RecordInvalid => exception
          render status: 403, json: exception.record.errors
      end

      def update
        @student.update_attributes(student_params)
        render status: 201, json: SampleAngularjsApp::JsonApi::Students::SingleWriter.new.write('students', @student, params)
        rescue ActiveRecord::RecordInvalid => exception
          render status: 403, json: exception.record.errors
      end

      def destroy
        @student = Student.find(params[:id])
        @student.destroy
        render status: 204, json: nil
        rescue ActiveRecord::RecordInvalid => exception
          render status: 403, json: exception.record.errors
      end

      private

      def student_params
        params.require(:students).permit(:sid,:sname,:semail,:smobile)
      end
      def load_student_info
        @student = @students.find(params[:id])
      end
    end
  # cloded the Students controller
  end
# closed the V1 Module
end
