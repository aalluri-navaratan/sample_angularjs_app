module SampleAngularjsApp
  module JsonApi
    # base writer which outputs JsonApi
    class BaseWriter
      def write(resource_name, resource, params, current_user = nil)
        @params = params
        @resource = resource
        @current_user = current_user
        result = {}

        result['links'] = build_links
        result[resource_name] = build_resource
        result['linked'] = build_linked_resources unless params.nil? || params[:include].nil?
        result
      end

      def build_single_resource(_resource)
        {}
      end

      protected

      def build_links
        {}
      end

      def build_links_with_ids(_resource)
        {}
      end

      def build_resource
        {}
      end

      def build_linked_resources
        {}
      end

      attr_reader :params, :resource, :current_user

      # private

      @params = nil
      @resource = nil
      @current_user = nil
    end
  end
end
