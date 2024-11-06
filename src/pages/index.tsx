import React, { Component } from 'react'
import {
  Badge,
  Blockquote,
  Box,
  Button,
  Callout,
  Dialog,
  Flex,
  Heading,
  Tabs,
  Text,
} from '@radix-ui/themes'
import { CopyBlock, dracula } from 'react-code-blocks'
import { InfoCircledIcon } from '@radix-ui/react-icons'

interface DocsPageState {
  currentStep: string
  currentSection: string
}

class DocsPage extends Component<object, DocsPageState> {
  constructor(props: object) {
    super(props)
    this.state = {
      currentSection: 'quickStart',
      currentStep: 'intro',
    }
  }

  render() {
    return (
        <div style={{margin: '50px'}}>
          <title>Docs</title>
          <Heading style={{textAlign: 'center'}}>Resonance Docs</Heading>
          <Tabs.Root defaultValue={'quickStartOverlay'}>
            <Tabs.List>
              <Tabs.Trigger value={'quickStartOverlay'}>
                Quick Start (Overlay)
              </Tabs.Trigger>
              <Tabs.Trigger value={'amplitude'}>
                Amplitude Integration
              </Tabs.Trigger>
              <Tabs.Trigger value={'quickStartPagelet'}>
                Quick Start (Pagelet)
              </Tabs.Trigger>
            </Tabs.List>
            <br/>
            <br/>

            <Box pt={'3'}>
              <Tabs.Content value={'quickStartOverlay'}>
                <Tabs.Root defaultValue={'intro'}>
                  <Tabs.List>
                    <Tabs.Trigger value={'intro'}>Introduction</Tabs.Trigger>
                    <Tabs.Trigger value={'part1'}>
                      Part 1: Setting Up GitHub Sync
                      <Badge style={{ marginLeft: '10px' }} variant={'outline'}>
                        One-Time
                      </Badge>
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'part2'}>
                      Part 2: Setting Up The Application Settings JSON
                      <Badge style={{ marginLeft: '10px' }} variant={'outline'}>
                        One-Time
                      </Badge>
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'part3'}>
                      Part 3: React Client Integration{' '}
                      <Badge style={{ marginLeft: '10px' }} variant={'outline'}>
                        One-Time
                      </Badge>
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'part4'}>
                      Part 4: Instrument Events
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'part5'}>
                      Part 5: Creating The Campaign Within Resonance
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'part6'}>
                      Part 6: Linking The React Format Component To Resonance{' '}
                      <Badge variant={'outline'} style={{ marginLeft: '10px' }}>
                        One Time
                      </Badge>
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'conclusion'}>Conclusion</Tabs.Trigger>
                  </Tabs.List>

                  <Box pt={'3'}>
                    <Tabs.Content value={'conclusion'}>
                      <Text>
                        If everything works, you should be able to test the
                        campaign end to end.
                      </Text>
                      <br />
                      <br />
                      <Blockquote>
                        You should be able to see your React component when you
                        click on the button that you instrumented.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        In the Resonance Builder UI for this campaign, you should
                        be able to see a new datapoint within the{' '}
                        <strong>Time Series</strong> tab for{' '}
                        <strong>Impressions</strong>. If you click on the second
                        CTA button, you should also be able to see a new datapoint
                        time series graph of <strong>Confirmations</strong>{' '}
                        button. The campaign should also appear multiple times in
                        a row if you click on the button, as this tutorial doesn't
                        configure frequency management for the campaign.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        The data should also update for the{' '}
                        <strong>Summary</strong> section as well based on what you
                        did earlier, depending on which variant was shown.
                      </Blockquote>
                    </Tabs.Content>
                    <Tabs.Content value={'intro'}>
                      <p>
                        In this example, we want to help you launch an overlay
                        campaign in Resonance.
                      </p>
                      <Blockquote>
                        For this example, the campaign that we are launching takes
                        the form of a modal, it's triggered by a button click in
                        your product (you can choose which button), and its goal
                        is to optimize some sort of conversion event (you can also
                        choose the name for this - we go with{' '}
                        <strong>test_event</strong>).
                      </Blockquote>
                      <br />
                      <Blockquote>
                        A example of such a banner is below. It is simple, as it
                        has a configurable title, description, and two buttons
                        with configurable text, as well as a click through event.
                      </Blockquote>
                      <br />
                      <Dialog.Root>
                        <Dialog.Trigger>
                          <Button variant={'soft'}>See Modal</Button>
                        </Dialog.Trigger>

                        <Dialog.Content maxWidth={'450px'}>
                          <Dialog.Title>Modal Title</Dialog.Title>
                          <Dialog.Description size={'2'} mb={'4'}>
                            Modal Description
                          </Dialog.Description>

                          <Flex gap={'3'} mt={'4'} justify={'end'}>
                            <Dialog.Close>
                              <Button variant={'soft'} color={'gray'}>
                                First CTA Button
                              </Button>
                            </Dialog.Close>
                            <Dialog.Close>
                              <Button>Second CTA Button</Button>
                            </Dialog.Close>
                          </Flex>
                        </Dialog.Content>
                      </Dialog.Root>
                    </Tabs.Content>
                    <Tabs.Content value={'part4'}>
                      <Blockquote>
                        Import the <strong>logConversion</strong> method and call
                        it in the places where you want to record a user
                        conversion. You generally should only need to do this once
                        per conversion event.
                      </Blockquote>

                      <br />

                      <CopyBlock
                          language={'jsx'}
                          text={
                              'import { logConversion } from resonance-client' +
                              '\n\n' +
                              'logConversion("test_event") // example usage for this quick start'
                          }
                          theme={dracula}
                          showLineNumbers={true}
                      />
                      <br />
                      <Blockquote>
                        As a sanity check, verify that there is a successful call
                        to <strong>logEvent</strong> in the Network Tab.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Next, you need to instrument <strong>notifyEvent</strong>{' '}
                        in the <strong>onClick</strong> handler for the button
                        that you want to trigger the campaign for.
                      </Blockquote>
                      <br />
                      <CopyBlock
                          language={'jsx'}
                          text={
                              'import { notifyEvent } from resonance-client' +
                              '\n\n' +
                              'notifyEvent("Button Clicked", {}) // example usage for this quick start'
                          }
                          theme={dracula}
                          showLineNumbers={true}
                      />
                      <br />
                      <Blockquote>
                        As a sanity check, verify that there is a successful call
                        to <strong>getbestmessages</strong> in the Network Tab
                        when you click on the button that you instrumented.
                      </Blockquote>
                    </Tabs.Content>
                    <Tabs.Content value={'part5'}>
                      <p>
                        If everything went well, then you should be able to create
                        a campaign in the Resonance web console (i.e.{' '}
                        <strong>app.{`{your_domain}`}.useresonance.com.)</strong>
                      </p>
                      <br />
                      <Blockquote>
                        Go to the menu at the top left, go to{' '}
                        <strong>Create</strong>, and select{' '}
                        <strong>Overlay</strong>.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Enter a name for your new campaign. Select{' '}
                        <strong>Modal</strong> as an option in the dropdown - the
                        dropdown menu is populated based on the application
                        settings JSON <strong>overlayFormats</strong> field.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Upon creating the campaign, you will be redirected to the
                        Campaign Builder UI. In the <strong>Builder</strong> tab,
                        you should see two variants by default (v1 and v2), and a
                        list of input elements, which come from your application
                        settings JSON.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Input text for each input field (ideally different values
                        for v1 and v2). You can ignore the{' '}
                        <strong>First CTA Action</strong> and{' '}
                        <strong>Second CTA Action</strong>. Save the campaign by
                        clicking the <strong>Edit</strong> button in the top right
                        and selecting <strong>Save</strong> from the following
                        menu.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Go to <strong>Conditions</strong> and select the{' '}
                        <strong>Button Clicked</strong> event from the{' '}
                        <strong>Trigger Event</strong> dropdown. This dropdown is
                        also populated by the <strong>events</strong> field of the
                        application settings JSON.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Lastly, go to <strong>Experimentation</strong>. From here,
                        configure the <strong>Rollout Percentage</strong> to 100,
                        choose <strong>test_event</strong> (or whatever you passed
                        in to <strong>logConversion</strong>) from the{' '}
                        <strong>Success Event</strong> dropdown, and select all
                        from the <strong>Primary + Secondary Metrics</strong>{' '}
                        dropdowns.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Click on <strong>Edit</strong> in the top right and click{' '}
                        <strong>Save</strong>. Then, do the same thing, but then
                        click <strong>Activate</strong>.The page should refresh
                        and there should be a green badge next to{' '}
                        <strong>Edit</strong>.
                      </Blockquote>
                    </Tabs.Content>
                    <Tabs.Content value={'part3'}>
                      <Blockquote>
                        Run the below command in terminal at the root of your
                        React project.
                      </Blockquote>

                      <br />

                      <CopyBlock
                          language={'bash'}
                          text={'npm install --save resonance-client'}
                          theme={dracula}
                          showLineNumbers={true}
                      />
                      <br />

                      <Blockquote>
                        Integrate the below component as high up the component
                        tree as possible, and fill in the placeholder props.
                      </Blockquote>
                      <br />
                      <CopyBlock
                          language={'tsx'}
                          text={
                              'import { ResonanceCrossChannelClient } from "resonance-client";\n' +
                              '\n' +
                              '// example instantiation\n' +
                              '<ResonanceCrossChannelClient\n' +
                              '   apiKey={"apiKey-that-you-generated-in-part-1"}\n' +
                              '   externalUserId={"user-id-of-a-logged-in-user"}\n' +
                              "   userAttributes={{'<user_attribute_name>: <user_attribute_value>'}}\n" +
                              "   eventContext={{'<event_context_field_name>: <event_context_field_value>'}}\n" +
                              "   apiUrl={'https://app.{your-domain}.useresonance.com'}>\n" +
                              '</ResonanceCrossChannelClient>\n'
                          }
                          showLineNumbers={true}
                          theme={dracula}
                      />
                      <br />
                    </Tabs.Content>
                    <Tabs.Content value={'part2'}>
                      <Text>
                        The second step is setting up a file called{' '}
                        <strong>resonance_application_settings.json</strong>. This
                        enables you to integrate your design system (i.e.
                        component library) into Resonance, so PM's can launch
                        campaigns with these components self-serve.
                      </Text>
                      <br />
                      <br />
                      <Blockquote>
                        Create a file called{' '}
                        <strong>resonance_application_settings.json</strong> in
                        the root of your repository.
                      </Blockquote>

                      <br />

                      <Blockquote>
                        <strong>Paste/add the below JSON into the file</strong>{' '}
                        and push the changes to your GitHub repository. To make
                        sure everything works, you should be able to see a GitHub
                        Action successfully run with the name{' '}
                        <strong>Sync resonance-settings</strong>
                        <br />
                      </Blockquote>
                      <br />
                      <Blockquote style={{ marginLeft: '2vw' }}>
                        For <strong>overlayFormats</strong>, each JSON object
                        specifies the various fields of a component that you want
                        a PM to be configure. So in this example, the fields
                        include the modal header, modal description, and modal
                        button(s) text, all of which are text.
                      </Blockquote>
                      <br />
                      <Blockquote style={{ marginLeft: '2vw' }}>
                        For <strong>events</strong>, each JSON object specifies
                        the name of a trigger event that you want to show a
                        campaign in response to.
                      </Blockquote>
                      <br />
                      <CopyBlock
                          text={
                              '{\n' +
                              '  "config": {\n' +
                              '    "overlayFormats": [\n' +
                              '      {\n' +
                              '        "formatInputs": [\n' +
                              '          {\n' +
                              '            "inputId": "header",\n' +
                              '            "inputDescription": "This is the banner header text.",\n' +
                              '            "inputType": "text",\n' +
                              '            "inputName": "Header"\n' +
                              '          },\n' +
                              '          {\n' +
                              '            "inputId": "description",\n' +
                              '            "inputDescription": "This is the banner description.",\n' +
                              '            "inputType": "text",\n' +
                              '            "inputName": "Description"\n' +
                              '          },\n' +
                              '          {\n' +
                              '            "inputId": "first_cta_text",\n' +
                              '            "inputDescription": "This is the first CTA\'s text.",\n' +
                              '            "inputType": "text",\n' +
                              '            "inputName": "First CTA Text"\n' +
                              '          },\n' +
                              '          {\n' +
                              '            "inputId": "first_cta_action",\n' +
                              '            "inputDescription": "This is the first CTA\'s action.",\n' +
                              '            "inputType": "cta",\n' +
                              '            "inputName": "First CTA Action"\n' +
                              '          },\n' +
                              '          {\n' +
                              '            "inputId": "second_cta_text",\n' +
                              '            "inputDescription": "This is the second CTA\'s text.",\n' +
                              '            "inputType": "text",\n' +
                              '            "inputName": "Second CTA Text"\n' +
                              '          },\n' +
                              '          {\n' +
                              '            "inputId": "second_cta_action",\n' +
                              '            "inputDescription": "This is the second CTA\'s action.",\n' +
                              '            "inputType": "cta",\n' +
                              '            "inputName": "Second CTA Action"\n' +
                              '          }\n' +
                              '        ],\n' +
                              '        "formatName": "Modal"\n' +
                              '      }\n' +
                              '    ],\n' +
                              '    "events": [\n' +
                              '      {\n' +
                              '        "eventId": "Button Clicked"\n' +
                              '      }\n' +
                              '    ]\n' +
                              '  }\n' +
                              '}\n'
                          }
                          language={'yaml'}
                          showLineNumbers={true}
                          theme={dracula}
                      />
                      <br />
                    </Tabs.Content>
                    <Tabs.Content value={'part1'}>
                      <Text>
                        The first step is setting up GitHub sync through your
                        GitHub actions.{' '}
                        <strong>
                          Note: You can skip if you've already done this step.
                        </strong>
                      </Text>
                      <br />
                      <br />
                      <Blockquote>
                        Click on the "User" icon at the top right and click on
                        "Account" in the sidebar that appears. This will take you
                        to an authorization UI. Generate an{' '}
                        <strong>Organization API Key</strong> and save it
                        somewhere.
                      </Blockquote>

                      <br />

                      <Blockquote>
                        Create a GitHub Action secret called{' '}
                        <strong>RESONANCE_GITHUB_SECRET_TOKEN</strong> with value
                        equal to the <strong>Organization API Key</strong>{' '}
                        generated in the previous step. Here are the{' '}
                        <a
                            href={
                              'https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository'
                            }
                        >
                          docs
                        </a>{' '}
                        on how to do so if you are not familiar with doing this in
                        GitHub.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Copy and paste what is below into a file called{' '}
                        <strong>resonance_settings_sync.yml</strong> in the{' '}
                        <strong>.github/workflows directory</strong> in the root
                        of your repository.{' '}
                        <strong>
                          You need to edit the domain in the url in the last step
                        </strong>{' '}
                        to match the domain of the url for your deployment (i.e.
                        app.dropbox.useresonance.com) and you need to edit the
                        branch placeholder to point to your main branch name (i.e.
                        master).
                      </Blockquote>
                      <br />
                      <CopyBlock
                          text={
                              '"on":\n' +
                              '  push:\n' +
                              '    branches:\n' +
                              '      - <your-prod-branch>\n' +
                              '    paths:\n' +
                              '      - resonance_application_settings.json\n' +
                              'name: Sync resonance-settings\n' +
                              'jobs:\n' +
                              '  resonance-sync-deploy:\n' +
                              '    runs-on: ubuntu-latest\n' +
                              '    steps:\n' +
                              '      - name: Checkout code\n' +
                              '        uses: actions/checkout@v3\n' +
                              '      - name: get properties\n' +
                              '        id: json_properties\n' +
                              '        uses: ActionsTools/read-json-action@main\n' +
                              '        with:\n' +
                              '          file_path: "resonance_application_settings.json"\n' +
                              '\n' +
                              '      - name: "Call API"\n' +
                              '        uses: indiesdev/curl@v1.1\n' +
                              '        with:\n' +
                              '          url: https://app.{your_domain}.useresonance.com/api/github/configsettings\n' +
                              '          method: "POST"\n' +
                              '          accept: 200\n' +
                              '          body: ${{steps.json_properties.outputs.config}}\n' +
                              '          timeout: 20000\n' +
                              '          bearer-token: ${{ secrets.RESONANCE_GITHUB_SECRET_TOKEN }}\n' +
                              '          log-response: true\n' +
                              '          retries: 3\n'
                          }
                          language={'yaml'}
                          showLineNumbers={true}
                          theme={dracula}
                      />
                      <br />
                    </Tabs.Content>
                    <Tabs.Content value={'part6'}>
                      <Blockquote>
                        Integrating a component with our React SDK involves
                        wrapping the component within the{' '}
                        <strong>PromptCampaignContext</strong> and making{' '}
                        <strong>logImpression</strong>,{' '}
                        <strong>tearDownCampaign</strong> and{' '}
                        <strong>logConfirmation</strong> SDK calls.{' '}
                      </Blockquote>
                      <br />
                      <Blockquote>
                        <strong>tearDownCampaign</strong> needs to be called to
                        end the campaign and ensure that a new one can be fetched.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        You should then mount the component as a child of the{' '}
                        <strong>ResonanceCrossChannelClient</strong> component
                        within the component tree, as it consumes{' '}
                        <strong>PromptCampaignContext</strong>.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        In the example below, we use our own modal implementation
                        (you should substitute yours).
                      </Blockquote>
                      <br />
                      <Blockquote>
                        The modal implementation is reading the field values for
                        each field of the modal from{' '}
                        <strong>PromptCampaignContext</strong> (the same field
                        values that you configured in the Resonance UI). This is
                        the key value of Resonance - it ranks and filters your
                        campaigns on the backend, uses AI to fetch the optimal
                        campaign variant, and injects the content of variant into
                        your UI components for instantiation!
                      </Blockquote>
                      <br />
                      <CopyBlock
                          language={'jsx'}
                          text={
                              'import {\n' +
                              '  logOverlayConfirmation,\n' +
                              '  logOverlayImpression,\n' +
                              '  tearDownCampaign,\n' +
                              '  PromptCampaignContext,\n' +
                              "} from 'resonance-client'" +
                              '\n\n' +
                              'export default class SimpleModal extends Component<{}, {}> {\n' +
                              '  render() {\n' +
                              '    return (\n' +
                              '      <PromptCampaignContext.Consumer>\n' +
                              '        {({ campaignToRender }) => {\n' +
                              '          // check to make sure the campaign should be rendered\n' +
                              '          if (\n' +
                              '            campaignToRender === null ||\n' +
                              "            campaignToRender.campaignFormat !== 'Modal'\n" +
                              '          ) {\n' +
                              '            return null\n' +
                              '          }\n' +
                              '\n' +
                              '          logOverlayImpression()\n' +
                              '          const { variantResult } = campaignToRender\n' +
                              '          const { content } = variantResult\n' +
                              '\n' +
                              '          return (\n' +
                              '            <Modal\n' +
                              '              open={true}\n' +
                              '              autoFocus={false}\n' +
                              "              aria-labelledby={'modal-modal-header'}\n" +
                              "              aria-describedby={'modal-modal-description'}\n" +
                              '              onClose={() => tearDownCampaign()}\n' +
                              '            >\n' +
                              '              <Box sx={style}>\n' +
                              '                <Typography\n' +
                              "                  id={'modal-modal-header'}\n" +
                              "                  variant={'h6'}\n" +
                              "                  component={'h2'}\n" +
                              '                >\n' +
                              "                  {content['header']}\n" +
                              '                </Typography>\n' +
                              "                <Typography id={'modal-modal-description'} sx={{ mt: 2 }}>\n" +
                              "                  {content['description']}\n" +
                              '                </Typography>\n' +
                              "                <div style={{ marginTop: '5vh' }}>\n" +
                              '                  <Button\n' +
                              "                    style={{ float: 'right' }}\n" +
                              "                    variant={'outlined'}\n" +
                              "                    color={'primary'}\n" +
                              '                    onClick={() => {\n' +
                              "                      if (content['first_cta_action'] === 'Confirm') {\n" +
                              '                        logOverlayConfirmation()\n' +
                              '                        tearDownCampaign()\n' +
                              '                      } else {\n' +
                              '                        tearDownCampaign()\n' +
                              '                      }\n' +
                              '                    }}\n' +
                              '                  >\n' +
                              "                    {content['first_cta_text']}\n" +
                              '                  </Button>\n' +
                              '                  <Button\n' +
                              "                    color={'success'}\n" +
                              "                    style={{ float: 'right', marginRight: '1vw' }}\n" +
                              "                    variant={'outlined'}\n" +
                              '                    onClick={() => {\n' +
                              '                         logOverlayConfirmation()\n' +
                              '                         tearDownCampaign()\n' +
                              '                    }}\n' +
                              '                  >\n' +
                              "                    {content['second_cta_text']}\n" +
                              '                  </Button>\n' +
                              '                </div>\n' +
                              '              </Box>\n' +
                              '            </Modal>\n' +
                              '          )\n' +
                              '        }}\n' +
                              '      </PromptCampaignContext.Consumer>\n' +
                              '    )\n' +
                              '  }\n' +
                              '}'
                          }
                          showLineNumbers={true}
                          theme={dracula}
                      />
                      <br />
                    </Tabs.Content>
                  </Box>
                </Tabs.Root>
              </Tabs.Content>

              <Tabs.Content value={'amplitude'}>
                <Blockquote>
                  Click on the menu icon in the top left corner.
                </Blockquote>
                <br />
                <Blockquote>
                  Click on the <strong>Settings</strong> icon.
                </Blockquote>
                <br />
                <Blockquote>
                  Enter your Amplitude project API key in the input and click{' '}
                  <strong>Update</strong>.
                </Blockquote>
                <br />
                <Blockquote>
                  Click on the <strong>Integrations</strong> tab and copy the{' '}
                  <strong>Webhook URL</strong>.
                </Blockquote>
                <br />
                <Blockquote>
                  Create a new destination of type Webhook. It should be a{' '}
                  <strong>Pipeline Destination</strong>. Make sure to check the
                  option of <strong>Send Amplitude's default payload</strong>.
                </Blockquote>
                <br />
                <Blockquote>
                  In Amplitude, navigate to a cohort that you want to sync and
                  click the blue <strong>Sync</strong> button at the top right.
                  Select the Webhook destination that you configured in the last
                  step.
                </Blockquote>
                <br />
                <Blockquote>
                  As a sanity check, click on the menu icon in the top left
                  corner, go to <strong>Segments</strong>, and you should see the
                  name of the Amplitude cohort appear in the table.
                </Blockquote>
                <br />
                <Blockquote>
                  You can now use this segment in the <strong>Audience</strong>{' '}
                  tab in the <strong>Campaign Builder</strong>.
                </Blockquote>
              </Tabs.Content>

              <Tabs.Content value={'quickStartPagelet'}>
                <Tabs.Root defaultValue={'intro'}>
                  <Tabs.List>
                    <Tabs.Trigger value={'intro'}>Introduction</Tabs.Trigger>
                    <Tabs.Trigger value={'part1'}>
                      Part 1: Setting Up GitHub Sync
                      <Badge style={{ marginLeft: '10px' }} variant={'outline'}>
                        One-Time
                      </Badge>
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'part2'}>
                      Part 2: Setting Up The Application Settings JSON
                      <Badge style={{ marginLeft: '10px' }} variant={'outline'}>
                        One-Time
                      </Badge>
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'part3'}>
                      Part 3: React Client Integration{' '}
                      <Badge style={{ marginLeft: '10px' }} variant={'outline'}>
                        One-Time
                      </Badge>
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'part4'}>
                      Part 4: Instrument Events
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'part5'}>
                      Part 5: Creating The Campaign Within Resonance
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'part6'}>
                      Part 6: Linking The React Format Component To Resonance{' '}
                      <Badge variant={'outline'} style={{ marginLeft: '10px' }}>
                        One Time
                      </Badge>
                    </Tabs.Trigger>
                    <Tabs.Trigger value={'conclusion'}>Conclusion</Tabs.Trigger>
                  </Tabs.List>

                  <Box pt={'3'}>
                    <Tabs.Content value={'conclusion'}>
                      <Text>
                        If everything works, you should be able to test the
                        campaign end to end.
                      </Text>
                      <br />
                      <br />
                      <Blockquote>
                        You should be able to see your React component when you
                        click on the button that you instrumented.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        In the Resonance Builder UI for this campaign, you should
                        be able to see a new datapoint within the{' '}
                        <strong>Time Series</strong> tab for{' '}
                        <strong>Impressions</strong>. If you click on the second
                        CTA button, you should also be able to see a new datapoint
                        time series graph of <strong>Confirmations</strong>{' '}
                        button. The campaign should also appear multiple times in
                        a row if you click on the button, as this tutorial doesn't
                        configure frequency management for the campaign.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        The data should also update for the{' '}
                        <strong>Summary</strong> section as well based on what you
                        did earlier, depending on which variant was shown.
                      </Blockquote>
                    </Tabs.Content>
                    <Tabs.Content value={'intro'}>
                      <p>
                        In this example, we want to help you launch a pagelet
                        campaign in Resonance. Pagelets are inline components that
                        are embedded into your application, akin to{' '}
                        <a
                            onClick={() => {
                              window.open(
                                  'https://irismedia.es/en/native-advertising-non-intrusive-successful/'
                              )
                            }}
                        >
                          native ad units
                        </a>
                        .
                      </p>
                      <Blockquote>
                        For this example, the campaign that we are launching takes
                        the form of an embedded banner, it's strategically placed
                        below the navigation bar of our website (you can choose
                        where you want to place the banner), and its goal is to
                        optimize some sort of conversion event (you can also
                        choose the name for this - we go with{' '}
                        <strong>test_event</strong>).
                      </Blockquote>
                      <br />
                      <Blockquote>
                        A example of such a modal is below. It is simple, as it
                        has a body, one button with configurable call-to-action,
                        as well as a click through event.
                      </Blockquote>
                      <br />
                      <Callout.Root>
                        <Callout.Icon>
                          <InfoCircledIcon />
                        </Callout.Icon>
                        <Callout.Text>Body Text</Callout.Text>
                        <Flex gap={'3'}>
                          <Button variant={'surface'}>CTA</Button>
                        </Flex>
                      </Callout.Root>
                    </Tabs.Content>
                    <Tabs.Content value={'part4'}>
                      <Blockquote>
                        Import the <strong>logConversion</strong> method and call
                        it in the places where you want to record a user
                        conversion. You generally should only need to do this once
                        per conversion event.
                      </Blockquote>

                      <br />

                      <CopyBlock
                          language={'jsx'}
                          text={
                              'import { logConversion } from resonance-client' +
                              '\n\n' +
                              'logConversion("test_event") // example usage for this quick start'
                          }
                          theme={dracula}
                          showLineNumbers={true}
                      />
                      <br />
                      <Blockquote>
                        As a sanity check, verify that there is a successful call
                        to <strong>logEvent</strong> in the Network Tab.
                      </Blockquote>
                    </Tabs.Content>
                    <Tabs.Content value={'part5'}>
                      <p>
                        If everything went well, then you should be able to create
                        a campaign in the Resonance web console (i.e.{' '}
                        <strong>app.{`{your_domain}`}.useresonance.com.)</strong>
                      </p>
                      <br />
                      <Blockquote>
                        Go to the menu at the top left, go to{' '}
                        <strong>Create</strong>, and select{' '}
                        <strong>Pagelet</strong>.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Enter a name for your new campaign. Select{' '}
                        <strong>localhost:3000/</strong> as the option in the{' '}
                        <strong>Surface</strong> dropdown and{' '}
                        <strong>Embedded Home Page Banner</strong> in the{' '}
                        <strong>Format</strong> dropdown - the dropdown menu is
                        populated based on the application settings JSON{' '}
                        <strong>pageletFormats</strong> field.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Upon creating the campaign, you will be redirected to the
                        Campaign Builder UI. In the <strong>Builder</strong> tab,
                        you should see two variants by default (v1 and v2), and a
                        list of input elements, which come from your application
                        settings JSON.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Input text for each input field (ideally different values
                        for v1 and v2). You can ignore the{' '}
                        <strong>Click Through Action</strong>. Save the campaign
                        by clicking the <strong>Edit</strong> button in the top
                        right and selecting <strong>Save</strong> from the
                        following menu.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Lastly, go to <strong>Experimentation</strong>. From here,
                        configure the <strong>Rollout Percentage</strong> to 100,
                        choose <strong>test_event</strong> (or whatever you passed
                        in to <strong>logConversion</strong>) from the{' '}
                        <strong>Success Event</strong> dropdown, and select all
                        from the <strong>Primary + Secondary Metrics</strong>{' '}
                        dropdowns.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Click on <strong>Edit</strong> in the top right and click{' '}
                        <strong>Save</strong>. Then, do the same thing, but then
                        click <strong>Activate</strong>.The page should refresh
                        and there should be a green badge next to{' '}
                        <strong>Edit</strong>.
                      </Blockquote>
                    </Tabs.Content>
                    <Tabs.Content value={'part3'}>
                      <Blockquote>
                        Run the below command in terminal at the root of your
                        React project.
                      </Blockquote>

                      <br />

                      <CopyBlock
                          language={'bash'}
                          text={'npm install --save resonance-client'}
                          theme={dracula}
                          showLineNumbers={true}
                      />
                      <br />

                      <Blockquote>
                        Integrate the below component as high up the component
                        tree as possible, and fill in the placeholder props.
                      </Blockquote>
                      <br />
                      <CopyBlock
                          language={'tsx'}
                          text={
                              '<ResonanceMicrocopyProvider\n' +
                              "    apiUrl={'https://app.{your_domain}.useresonance.com'}\n" +
                              '    externalUserId={"user-id-of-logged-in-user"}\n' +
                              '    apiKey={"your-api-key"}\n' +
                              "    eventContext={{'<event_context_field_name>: <event_context_field_value>'}}\n" +
                              "    userAttributes={{'<user_attribute_name>: <user_attribute_value>'}}>\n" +
                              '</ResonanceMicrocopyProvider>'
                          }
                          showLineNumbers={true}
                          theme={dracula}
                      />
                      <br />
                    </Tabs.Content>
                    <Tabs.Content value={'part2'}>
                      <Text>
                        The second step is setting up a file called{' '}
                        <strong>resonance_application_settings.json</strong>. This
                        enables you to integrate your design system (i.e.
                        component library) into Resonance, so PM's can launch
                        campaigns with these components self-serve.
                      </Text>
                      <br />
                      <br />
                      <Blockquote>
                        Create a file called{' '}
                        <strong>resonance_application_settings.json</strong> in
                        the root of your repository.
                      </Blockquote>

                      <br />

                      <Blockquote>
                        <strong>Paste/Add the below JSON into the file</strong>{' '}
                        and push the changes to your GitHub repository. To make
                        sure everything works, you should be able to see a GitHub
                        Action successfully run with the name{' '}
                        <strong>Sync resonance-settings</strong>
                        <br />
                      </Blockquote>
                      <br />
                      <Blockquote style={{ marginLeft: '2vw' }}>
                        For <strong>pageletFormats</strong>, each JSON object has
                        the following properties:
                      </Blockquote>

                      <br />
                      <Blockquote style={{ marginLeft: '4vw' }}>
                        <strong>formatInputs</strong>: This specifies the various
                        fields of a component that you want a PM to be configure.
                        So in this example, the fields include the banner body,
                        banner button cta, and banner button click through action.
                      </Blockquote>
                      <br />
                      <Blockquote style={{ marginLeft: '4vw' }}>
                        <strong>formatName</strong>: This is a human-readable name
                        for the new campaign format.
                      </Blockquote>
                      <br />
                      <Blockquote style={{ marginLeft: '4vw' }}>
                        <strong>slot</strong>: This is a human-readable name for
                        the "location" within the website of the campaign format.
                        Different formats can occupy the same part of the website
                        real-estate and as such it is important for those formats
                        to have the same slot value to indicate a conflict.
                      </Blockquote>
                      <br />
                      <Blockquote style={{ marginLeft: '4vw' }}>
                        <strong>surface</strong>: This is the url of where the
                        campaign format shows up.
                      </Blockquote>
                      <br />
                      <CopyBlock
                          text={
                              '{\n' +
                              '  "config": {\n' +
                              '    "pageletFormats": [\n' +
                              '      {\n' +
                              '        "formatInputs": [\n' +
                              '          {\n' +
                              '            "inputId": "description",\n' +
                              '            "inputDescription": "This is the banner description.",\n' +
                              '            "inputType": "text",\n' +
                              '            "inputName": "Description",\n' +
                              '          },\n' +
                              '          {\n' +
                              '            "inputId": "button_text",\n' +
                              '            "inputDescription": "This is the banner button text.",\n' +
                              '            "inputType": "text",\n' +
                              '            "inputName": "Button Text",\n' +
                              '          },\n' +
                              '          {\n' +
                              '            "inputId": "cta",\n' +
                              '            "inputDescription": "This is the banner button click through action.",\n' +
                              '            "inputType": "cta",\n' +
                              '            "inputName": "Click Through Action"\n' +
                              '          }\n' +
                              '        ],\n' +
                              '        "formatName": "Embedded Home Page Banner",\n' +
                              '        "slot": "Below Navigation Bar",\n' +
                              '        "surface": "http://localhost:3000/"\n' +
                              '      }\n' +
                              '    ]\n' +
                              '  }\n' +
                              '}'
                          }
                          language={'yaml'}
                          showLineNumbers={true}
                          theme={dracula}
                      />
                      <br />
                    </Tabs.Content>
                    <Tabs.Content value={'part1'}>
                      <Text>
                        The first step is setting up GitHub sync through your
                        GitHub actions.{' '}
                        <strong>
                          Note: You can skip if you've already done this step.
                        </strong>
                      </Text>
                      <br />
                      <br />
                      <Blockquote>
                        Click on the "User" icon at the top right and click on
                        "Account" in the sidebar that appears. This will take you
                        to an authorization UI. Generate an{' '}
                        <strong>Organization API Key</strong> and save it
                        somewhere.
                      </Blockquote>

                      <br />

                      <Blockquote>
                        Create a GitHub Action secret called{' '}
                        <strong>RESONANCE_GITHUB_SECRET_TOKEN</strong> with value
                        equal to the <strong>Organization API Key</strong>{' '}
                        generated in the previous step. Here are the{' '}
                        <a
                            href={
                              'https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository'
                            }
                        >
                          docs
                        </a>{' '}
                        on how to do so if you are not familiar with doing this in
                        GitHub.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        Copy and paste what is below into a file called{' '}
                        <strong>resonance_settings_sync.yml</strong> in the{' '}
                        <strong>.github/workflows directory</strong> in the root
                        of your repository.{' '}
                        <strong>
                          You need to edit the domain in the url in the last step
                        </strong>{' '}
                        to match the domain of the url for your deployment (i.e.
                        app.dropbox.useresonance.com) and you need to edit the
                        branch placeholder to point to your main branch name (i.e.
                        master).
                      </Blockquote>
                      <br />
                      <CopyBlock
                          text={
                              '"on":\n' +
                              '  push:\n' +
                              '    branches:\n' +
                              '      - <your-prod-branch>\n' +
                              '    paths:\n' +
                              '      - resonance_application_settings.json\n' +
                              'name: Sync resonance-settings\n' +
                              'jobs:\n' +
                              '  resonance-sync-deploy:\n' +
                              '    runs-on: ubuntu-latest\n' +
                              '    steps:\n' +
                              '      - name: Checkout code\n' +
                              '        uses: actions/checkout@v3\n' +
                              '      - name: get properties\n' +
                              '        id: json_properties\n' +
                              '        uses: ActionsTools/read-json-action@main\n' +
                              '        with:\n' +
                              '          file_path: "resonance_application_settings.json"\n' +
                              '\n' +
                              '      - name: "Call API"\n' +
                              '        uses: indiesdev/curl@v1.1\n' +
                              '        with:\n' +
                              '          url: https://app.{your_domain}.useresonance.com/api/github/configsettings\n' +
                              '          method: "POST"\n' +
                              '          accept: 200\n' +
                              '          body: ${{steps.json_properties.outputs.config}}\n' +
                              '          timeout: 20000\n' +
                              '          bearer-token: ${{ secrets.RESONANCE_GITHUB_SECRET_TOKEN }}\n' +
                              '          log-response: true\n' +
                              '          retries: 3\n'
                          }
                          language={'yaml'}
                          showLineNumbers={true}
                          theme={dracula}
                      />
                      <br />
                    </Tabs.Content>
                    <Tabs.Content value={'part6'}>
                      <Blockquote>
                        Integrating a component with our React SDK involves
                        wrapping the component within the{' '}
                        <strong>MicrocopyContext</strong> and making{' '}
                        <strong>logMicrocopyImpression</strong>and{' '}
                        <strong>logMicrocopyConfirmation</strong> SDK calls.{' '}
                      </Blockquote>
                      <br />
                      <Blockquote>
                        You should then mount the component as a child of the{' '}
                        <strong>ResonanceMicrocopyProvider</strong> component
                        within the component tree, as it consumes{' '}
                        <strong>MicrocopyContext</strong>.
                      </Blockquote>
                      <br />
                      <Blockquote>
                        In the example below, we use our own banner implementation
                        (you should substitute yours).
                      </Blockquote>
                      <br />
                      <Blockquote>
                        The banner implementation is reading the field values for
                        each field of the banner from{' '}
                        <strong>MicrocopyContext</strong> (the same field values
                        that you configured in the Resonance UI). This is the key
                        value of Resonance - it ranks and filters your campaigns
                        on the backend, uses AI to fetch the optimal campaign
                        variant, and injects the content of variant into your UI
                        components for instantiation!
                      </Blockquote>
                      <br />
                      <CopyBlock
                          language={'jsx'}
                          text={
                              'import {\n' +
                              '  logMicrocopyConfirmation,\n' +
                              '  logMicrocopyImpression,\n' +
                              '  MicrocopyContext,\n' +
                              "} from 'resonance-client'\n" +
                              '\n' +
                              'export default class SimpleBanner extends Component<{}, {}> {\n' +
                              '  render() {\n' +
                              '    return (\n' +
                              '      <MicrocopyContext.Consumer>\n' +
                              '        {({ copies }) => {\n' +
                              '          const copiesToFilter = copies.filter(\n' +
                              "            (c) => c.format === 'Embedded Home Page Banner'\n" +
                              '          )\n' +
                              '\n' +
                              '          if (copiesToFilter.length <= 0) {\n' +
                              '            return null\n' +
                              '          }\n' +
                              '\n' +
                              '          const copy = copiesToFilter[0]\n' +
                              '          logMicrocopyImpression(\n' +
                              '            copy.campaignId,\n' +
                              '            copy.variant.variantId,\n' +
                              '            copy.variant.variantName\n' +
                              '          )\n' +
                              '\n' +
                              '          return (\n' +
                              "            <Box style={{ marginLeft: '20vw', marginRight: '20vw' }}>\n" +
                              "              <Alert severity={'info'}>\n" +
                              "                <Typography variant={'body1'}>\n" +
                              "                  {copy.variant.content['description']}\n" +
                              '                </Typography>\n' +
                              '                <Button\n' +
                              '                  onClick={() => {\n' +
                              '                    logMicrocopyConfirmation(\n' +
                              '                      copy.campaignId,\n' +
                              '                      copy.variant.variantId,\n' +
                              '                      copy.variant.variantName\n' +
                              '                    )\n' +
                              '                  }}\n' +
                              '                >\n' +
                              "                  {copy.variant.content['button_text']}\n" +
                              '                </Button>\n' +
                              '              </Alert>\n' +
                              '            </Box>\n' +
                              '          )\n' +
                              '        }}\n' +
                              '      </MicrocopyContext.Consumer>\n' +
                              '    )\n' +
                              '  }\n' +
                              '}\n'
                          }
                          showLineNumbers={true}
                          theme={dracula}
                      />
                      <br />
                    </Tabs.Content>
                  </Box>
                </Tabs.Root>
              </Tabs.Content>
            </Box>
          </Tabs.Root>
        </div>
    )
  }
}

export default DocsPage
