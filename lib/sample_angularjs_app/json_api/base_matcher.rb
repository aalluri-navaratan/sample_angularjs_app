module SampleAngularjsApp
  module JsonApi
    # BaseReader class which reads the JsonApi format
    class BaseMatcher
      def match(resource, include_attributes = false)
        result = {
          links: build_links
        }
        result = result.merge(build_resource_match(resource))
        result['linked'] = build_linked_resource_match(resource) if include_attributes
        result
      end

      def build_links
        {}
      end

      def build_resource_match(_resource)
        {}
      end

      def build_linked_resource_match(_resource)
        {}
      end
    end
  end
end
