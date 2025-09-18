import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Datepicker from '../components/Datepicker';

const meta: Meta<typeof Datepicker> = {
  title: 'Components/Datepicker',
  component: Datepicker,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A fully interactive datepicker component with calendar dropdown, month navigation, and date selection. Supports keyboard navigation and follows accessibility best practices.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultDate: {
      control: 'date',
      description: 'Default selected date',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the datepicker',
    },
    onChange: {
      action: 'date-changed',
      description: 'Callback fired when date is selected',
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Select date',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default datepicker with standard styling and behavior.',
      },
    },
  },
};

// With default date
export const WithDefaultDate: Story = {
  args: {
    defaultDate: new Date('2024-03-15'),
    placeholder: 'Select date',
  },
  parameters: {
    docs: {
      description: {
        story: 'Datepicker with a pre-selected date.',
      },
    },
  },
};

// Custom placeholder
export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Choose your birthday',
  },
  parameters: {
    docs: {
      description: {
        story: 'Datepicker with custom placeholder text.',
      },
    },
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Select date',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled datepicker that cannot be interacted with.',
      },
    },
  },
};

// Multiple datepickers showcase
export const MultipleDatepickers: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Start Date
        </label>
        <Datepicker placeholder="Select start date" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          End Date
        </label>
        <Datepicker placeholder="Select end date" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple datepickers used together, useful for date ranges.',
      },
    },
  },
};

// Form integration example
export const InForm: Story = {
  render: () => (
    <form className="max-w-md space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Event Name
        </label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter event name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Event Date
        </label>
        <Datepicker placeholder="Select event date" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter description"
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Create Event
      </button>
    </form>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Datepicker integrated within a form context.',
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    placeholder: 'Select date',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test different configurations of the datepicker.',
      },
    },
  },
};
